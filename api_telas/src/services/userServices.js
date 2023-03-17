import database from '../repository/connection.js';

async function createUser(nome, email, senha) { 
    const sql = 'INSERT INTO tbl_usuario (nome, email, senha) VALUES(?, ?, ?)'; 
    
    const dados = [nome, email, senha];


    const conn = await database.connect();
    
    conn.query(sql, dados);
    conn.end();
}

export default {createUser};