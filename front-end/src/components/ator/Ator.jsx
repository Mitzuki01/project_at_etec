import React from "react";
import Table from 'react-bootstrap/Table'
import api from '../../api'
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Ator(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <th>Configuração</th>
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
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      
    </>
  )

}

export default Ator;