import React from "react";
import { Link,useNavigate } from "react-router-dom";


function Home(){


  let navigate = useNavigate();
  function handleLogout(){
    sessionStorage.clear();
    window.location.reload(true)
    navigate("/")
  }

  return(
    <div>
      bem vindo a tela inicial

        <Link to='login'>
        <button onClick={handleLogout}>
           sair
        </button>
        </Link>

    </div>
  )



}

export default Home