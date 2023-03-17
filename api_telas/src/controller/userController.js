import express from 'express'
import db from '../services/userServices.js'

const router = express.Router()

router.post('/', async (resquest, response) => {
  const {nome, email, senha, telefone, nascimento} = resquest.body
  console.log(nome)
  await db.createUser(nome, email, senha, telefone, nascimento)
  
})

export default router
