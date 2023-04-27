import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import api from '../../api'
import { useState,useEffect } from "react";


function Home(){
  const [actor, setActor] = useState([]);

  useEffect(()=>{
    async function getActor(){ 
    const {data} = await api.get('/actor');
    setActor(data);
    }
    getActor();
  },[actor]);

  return(
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>código</th>
            <th>Nome</th>
            <th>Sexo</th>
            <th>Data de Nascimento</th>
          </tr>
        </thead>
        <tbody>
          {
            actor.map((item)=>(
              <tr key={item.Id_ator}>
                <td>{item.Id_ator}</td>
                <td>{item.Nome_ator}</td>
                <td>{item.Sexo}</td>
                <td>{item.Dt_nascimento}</td>
                <td>
                  <button className="btn modal-trigger btn-editar">Editar</button>
                  <button className="btn modal-trigger btn-excluir">Excluir</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )

}

export default Home;