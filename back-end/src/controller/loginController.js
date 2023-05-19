import express, { response } from 'express'
import db from '../services/userlogin.js'
import { generatePassword, GenerateToken } from '../helpers/loginAction.js';

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
  const {email,password} = request.body
  await db.loginUser(email,password)

  try{
    const userl = await db.loginUser(email, password);

    const id_user = userl[0].id_usuario;
    const nome_user = userl[0].nome;
    const email_user = userl[0].email;
    const type_user = userl[0].tipo_usuario

    if(email === '' || password === ''){
      return(response.status(422).send('Campo em branco'))
    }
    if(userl.length > 0){
      const token = GenerateToken(id_user,nome_user,email_user,type_user);
      console.log(token)
      return(response.status(200).send('Login bem sucedido'+token))
    }
    else{
      return(response.status(404).send('Usuário não cadastrado'))
    }
    }catch{
      response.status(500).send('Error')
    }
})


export default router



