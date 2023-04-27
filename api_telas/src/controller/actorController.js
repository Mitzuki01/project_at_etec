import express, { response } from 'express';
import db from '../services/actorService.js'

const router = express.Router();

router.get('/',async(req,res)=>{
  try{
    const results = await db.findActor();
    if(results.lenght == 0){
      res.status(204).end();
    }else{
      res.status(200).json(results)
    }
  }catch(err){
    response.status(500).json({message: `encontramos um erro: ${err}`});
  }
});

router.put('/', async(req,res)=>{
  //receber os dados que vem do front-end
  try{
  const {nomeActor,gender,birthday, idActor} = req.body
  await db.updateActor(nomeActor,gender,birthday,idActor)

  res.status(200).send({message:`dados atualizados com sucesso!`})
  }catch(err){
    res.status(500).send({message:`Houve um erro ao atualizar, ${err}`})
  }
})

export default router;