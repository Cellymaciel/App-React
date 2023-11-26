import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.db');

const initializeDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS cidadesFavoritadas (id INTEGER PRIMARY KEY AUTOINCREMENT, usuario_id INTEGER, nome_cidade TEXT);',
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const getDatabase = () => {
  return db;
};

export const initDB = async () => {
  try {
    await initializeDatabase();
    console.log('Banco de dados inicializado');
  } catch (error) {
    console.error('Erro ao inicializar o banco de dados:', error);
  }
};

export default db;
