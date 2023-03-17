import express, { response } from 'express'
import db from '../services/userlogin.js'
import { generatePassword } from '../helpers/loginAction.js';

const router = express.Router()

 router.post('/reset', async(request,response)=>{
   const {email} = request.body;

   try{
     const user = await db.checkEmail(email);

     if(user.length > 0){
       const newPassword = generatePassword();
       await db.changePassword(email, newPassword);
       response.status(200).send({message: `Nova senha ${newPassword}`});
     }else{
      response.status(200).send({message: `User not Found`});
     }
   } catch{
    response.status(200).send({message: `Nova senha ${newPassword}`});
   }
 })


router.post('/', async (request, response) => {
  const {email} = request.body
  await db.loginUser(email)
  try{
    const users = await db.loginUser(email);

    if(users.length > 0){
      response.status(200).send({message: "Login efetuado com sucesso!!"})
   }else{
     response.status(401).send({message: "Login incorreto"});
     console.log(users)
   }
  }catch(err){
    response.status(500).send({message: "Houve um erro no Banco de dados"})
  }
});


export default router



