import db from "./SQLiteDataBase"
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS cidadesFavoritadas (id INTEGER PRIMARY KEY AUTOINCREMENT, usuario_id INTEGER, nome_cidade TEXT);'
  )
})

const addFavoritedCity = (usuario_id, nome_cidade) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO cidadesFavoritadas (usuario_id, nome_cidade) VALUES (?, ?);',
        [usuario_id, nome_cidade],
        (_, { insertId }) => resolve(insertId),
        (_, error) => reject(error)
      )
    })
  })
}

export {
  addFavoritedCity
  // ... (outras funções conforme necessário)
}
