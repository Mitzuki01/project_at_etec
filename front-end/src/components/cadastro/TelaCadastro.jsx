import React from "react";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'
import Style from "./Style.css";
import { useState } from 'react';
import api from '../../api';
import { set } from "lodash";
import { IMaskInput } from 'react-imask';





function Cadastro(){
    
    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');
    const [nome, setUserName] = useState('');
    
    function handleLogin(e){
        e.preventDefault();
        toast.success('🦄 pego!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    async function hadlerRegister(event){
        event.preventDefault();
        try{
            const data = {
                email, senha, nome
            };
            const response = await api.post('/user', data);
    
            alert(`Usuário cadastrado, bem vindo ${nome}`);
    
            // setEmail('');
            // setPassword('');
            // setUserName('');
        }   catch(error){
            alert(`Erro no cadastro`)
        }
    

}

    return(

 <div className="background">

<form>
    
    <div>
        <input type="text"placeholder="Your name..."
         class="text_area" value={nome}
         onChange={e => setUserName(e.target.value)}
        required
         />
    </div>
    <div>
        <input type="email"
         placeholder="Your email..." class="text_area"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required/>
    </div>
    <div>
        <input type="password" name="senha"
         placeholder="password..." class="text_area" id="senha"
          value={senha}
          onChange={e => setPassword(e.target.value)}
        required/>
    </div>
    {/*<div>
        <input type="password" name="confirma_senha"
         placeholder="confirm your password..." class="text_area" id="senha"/>
    </div>*/}

<IMaskInput placeholder="cpf" mask="000.000.000-00"/>

<IMaskInput placeholder="data" mask ="00/00/0000"/>
    <div >
         <input type="submit" name="subject"
          value="REGISTRATION" class="button" onClick={hadlerRegister}/ > 
    </div> 
    <div >
    <Link to='/'>
        <input type="submit" name="subject"
         value="LOGIN" class="button"/>
    </Link>
    </div>

    <button variant="primary" type="submit"
        onClick={handleLogin}
    >
       <h1>teste</h1>
    </button>
</form>
</div>
    )
}

export default Cadastro