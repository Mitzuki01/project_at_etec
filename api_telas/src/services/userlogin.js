import database from '../repository/connection.js';

async function loginUser(email, senha){
  const sql = "SELECT * FROM tbl_usuario WHERE email = ?"
  
  const dados = [email]
  
  const conn = await database.connect();

  const [rows] = await conn.query(sql, dados)
  conn.end();

  return rows;
}

export default {loginUser};