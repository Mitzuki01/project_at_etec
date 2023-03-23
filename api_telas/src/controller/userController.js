import express from 'express'
import db from '../services/userServices.js'
import bcrypt from 'bcrypt'

const router = express.Router()


router.post('/', async (resquest, response) => {
  
  const {nome, email, senha, telefone, nascimento} = resquest.body
  let saltRounds = 10
  console.log(senha)
  await db.createUser(nome, email,bcrypt.hash(senha), telefone, nascimento)
    
  
  
})

export default router
