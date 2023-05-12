import mysql2 from 'mysql2/promise';

async function connect() {
  const connection = await mysql2.createConnection({ 
    user : 'root',
    host : 'localhost',
    port : 3306,
    password : '',
    database : 'cinema'

  })
  
  return connection;
};


export default {connect};