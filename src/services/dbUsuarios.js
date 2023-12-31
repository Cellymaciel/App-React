import db from './SQLiteDataBase'

// Criação da tabela de usuários
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, password TEXT, cidade TEXT);'
  )
})

const createUser = (nome, email, password, cidade) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO usuarios (nome, email, password, cidade) VALUES (?, ?, ?, ?);',
        [nome, email, password, cidade],
        (_, { insertId }) => {
          tx.executeSql(
            'SELECT * FROM usuarios WHERE id = ?;',
            [insertId],
            (_, { rows }) => {
              const user = rows.item(0)
              resolve({
                success: true,
                userId: user.id,
                userName: user.nome,
                userEmail: user.email,
                userPassword: user.password,
                userCity: user.cidade,
                message: 'Usuário Criado com sucesso!'
              })
            },
            (_, error) => reject(error)
          )
        },
        (_, error) => reject(error)
      )
    })
  })
}

const findUserByEmail = email => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM usuarios WHERE email = ?;',
        [email],
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows.item(0))
          else reject('Usuario não encontrado pelo email: ' + email)
        },
        (_, error) => reject(error)
      )
    })
  })
}

const findUserByEmailAndPassword = (email, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM usuarios WHERE email = ? AND password = ?;',
        [email, password],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve({
              success: true,
              user: rows.item(0)
            })
          } else {
            reject('Senha ou usuário inválidos')
          }
        },
        (_, error) => reject(error)
      )
    })
  })
}

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM usuarios;',
        [],
        (_, { rows }) => {
          const users = []
          for (let i = 0; i < rows.length; i++) {
            users.push(rows.item(i))
          }
          resolve(users)
        },
        (_, error) => reject(error)
      )
    })
  })
}
export default {
  createUser,
  findUserByEmail,
  findUserByEmailAndPassword,
  getAllUsers
}
