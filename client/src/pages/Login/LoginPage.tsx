import { getPedidos, loginRequest } from "../../api/auth";
import { useForm, SubmitHandler } from "react-hook-form"
import { useAuthStore } from "../../store/auth";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Logo.jpg"
import logoLogin from "../../assets/img/Logo-login.webp"
import "./LoginPage.css"


type Inputs = {
  email: string
  password: string
}

export default function LoginPage() {
  const setToken = useAuthStore(state => state.setTokent)
  const navigate = useNavigate()
 
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async(data) => {
   try {
     const res = await loginRequest(data.email, data.password)
    setToken(res.token)
    
    navigate("/mesas")
    const resPedidos = await getPedidos()
    console.log(resPedidos);
    
   } catch (error) {
    console.error(error);
   }
  } 
  
  return (
    <div className="main">

      <div className="logo-login">
        <img className="logo-img" src={logoLogin} alt="" />
      </div>

      <div className="main-login">
    <div className="login">
    <form className="form" onSubmit={handleSubmit(onSubmit)}>

      <div className="logo-container">

     <img className="logo" src={Logo}  />
      </div>
     <h1 className="welcome">Bienvenidos!</h1>

    <div className="inputs-container">
      <div>
    <input placeholder="Correo" className="login-input" {...register("email",{required: true})} />
      </div>

      <div>
        
    <input placeholder="Contraseña" className="login-input"{...register("password", { required: true })} />
      </div>
    
    </div>

    <div className="submit-container">
      <input className="submit" type="submit" />

    </div>
      <div className="info-login">
        <p className="p-info">Olvidaste tu contraseña</p>
        <p className="p-info">No tienes cuenta? <Link to="/register">Crear cuenta</Link> </p>
      </div>
    </form>
    </div>
    </div>
    </div>
   


  )
}
