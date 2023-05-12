import { Navigate, Outlet } from "react-router";

function Protecte(){
  const auth = sessionStorage.getItem("login")
  return(
    auth ? <Outlet /> : <Navigate to='/' />
  )
}

export default Protecte;