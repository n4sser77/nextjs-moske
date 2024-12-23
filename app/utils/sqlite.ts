import sqlite from 'sqlite3'

export const db =  new sqlite.Database("db.sqlite")

export const createTable = db.run(`
    CREATE TABLE IF NOT EXISTS Users (
            id INTEFER PRIMARY KEY,
            username TEXT,
            password TEXT
    );
`); 

export const insertTable  = (username: string, password: string) => { db.run( `
    INSERT INTO Users (username, password)
    VALUES ('${username}','${password}' )
    
    ` );
}

