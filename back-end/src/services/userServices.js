import database from '../repository/connection.js';

async function createUser(nome, email, senha) { 
    const sql = 'INSERT INTO tbl_usuario (nome, email, senha) VALUES(?, ?, ?)'; 
    const dados = [nome, email, senha];
    const conn = await database.connect();
    conn.query(sql, dados);
    conn.end();
}

async function updateProfile(nome, email, senha, telefone, nascimento,id_usuario){
    const sql = 'UPDATE tbl_usuario SET nome = ?, email=? senha = ?, tipo_usuario = ? WHERE id_usuario = ?'
    const dataProfile = [nome, email, senha, tipo_usuario, id_usuario];

    const conn = await database.connect();
    conn.query(sql,dataProfile);
    conn.end();
}

export default {createUser};