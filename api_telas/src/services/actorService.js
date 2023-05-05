import database from '../repository/connection.js'

async function findActor(){
  const sql = 'SELECT * FROM tbl_ator';

  const conn = await database.connect();
  const [rows] = await conn.query(sql);
  conn.end();
  return rows;
}

async function updateActor(nomeActor,gender,birthday,idActor){
  const sql = 'UPDATE tbl_ator SET Nome_ator = ?, Sexo = ?, Dt-nascimento = ? WHERE id_ator = ?';
  const dataActor = [nomeActor, gender,birthday,idActor];
  const conn = await database.connect();
  await conn.query(sql,dataActor);
  await conn.end();

}

async function deleteActor(idActor){
  const sql = 'DELETE FROM tbl_ator WHERE Id_ator = ?'
  const conn =  await database.connect();
  await conn.query(sql, idActor);
  conn.end();
}

export default {findActor,updateActor,deleteActor};