import express from 'express'
import db from '../services/userServices.js'
import { GenerateToken } from '../helpers/loginAction.js'


const router = express.Router()


router.post('/', async (resquest, response) => {
  
  const {nome, email, senha, telefone, nascimento} = resquest.body
  console.log(senha)
  await db.createUser(nome, email,senha, telefone, nascimento)
    
  
  
})

export default router
