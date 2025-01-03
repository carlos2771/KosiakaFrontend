import { Link } from "react-router-dom"
import Logo from "../../assets/img/Logo.jpg"
import { IoFastFoodSharp} from "react-icons/io5";

import { IoPerson } from "react-icons/io5";
import "./Sidebar.css"
import { useAuthStore } from "../../store/auth";
import { CiLogout } from "react-icons/ci";


type Show ={
  show: boolean
}


export default function Sidebar({show} :Show) {

  const logout = useAuthStore(state => state.logOut)

  return (
    <div className={show ? "sidebar active" : "sidebar"}>
     
      <div>

        <img  className="sidebar-logo" src={Logo} />
      </div>
      <ul className="sidebar-ul">

        <li className="sidebar-li">
        <Link className="sidebar-link" to="/comidas"><IoPerson/>Perfil</Link>
        </li>
        <li className="sidebar-li">
        <Link className="sidebar-link" to="/comidas"><IoFastFoodSharp/> Comidas</Link>
        </li>
        <li className="sidebar-li">
        <Link className="sidebar-link text-cyan-50" to="/comidas">Mis pedidos</Link>
        </li>
     
     <div className="logout ">

      <li className="sidebar-li">
          <Link className="sidebar-link-logout" to={"/login"} onClick={()=> {logout() }}><CiLogout/> Salir</Link>
         </li>
     </div>
      </ul>
      
      
    </div>
  )
}
