import express, { response } from 'express'
import db from '../services/userServices.js'
import { GenerateToken } from '../helpers/loginAction.js'


const router = express.Router()


router.post('/', async (resquest, response) => {

  try{
    const {nome, email, senha, telefone, nascimento} = resquest.body
    console.log(senha)
    await db.createUser(nome, email,senha, telefone, nascimento)
    response.status(200).send({message:'cadastrado com sucesso'})
  }catch(err){
    response.status(500).send({Message: `Houve um erro no cadastro ${err}`})
  }
})

router.put('/profile',(req,res)=>{
  try{
    const {nome, email, senha, tipo_usuario} = req.body;
    const {idUserProfile} = req;
    db.updateProfile(nome, email, senha, tipo_usuario,idUserProfile);
    response.status(200).send({Message:'dados atualizados com sucesso'})
  }catch(err){
    response.status(500).send({MEssage: `Houve um erro. ${err}`});
  }
  
});

router.delete('/:idActor',(req,res)=>{

});

export default router
