// // Altere de './SQLiteDatabase' para './SQLiteDatabase'
// import db from './SQLiteDataBase'

// // Criação da tabela de usuários
// db.transaction(tx => {
//   tx.executeSql(
//     'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, password TEXT, cidade TEXT);'
//   )
// })

// const createUser = (nome, email, password, cidade) => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'INSERT INTO usuarios (nome, email, password, cidade) VALUES (?, ?, ?, ?);',
//         [nome, email, password, cidade],
//         (_, { insertId }) => resolve(insertId),
//         (_, error) => reject(error)
//       )
//     })
//   })
// }

// const findUserByEmail = email => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'SELECT * FROM usuarios WHERE email = ?;',
//         [email],
//         (_, { rows }) => {
//           if (rows.length > 0) resolve(rows.item(0))
//           else reject('User not found for email: ' + email)
//         },
//         (_, error) => reject(error)
//       )
//     })
//   })
// }

// export default {
//   createUser,
//   findUserByEmail
//   // ... (outras funções conforme necessário)
// }
