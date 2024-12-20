import { Navigate,Outlet } from "react-router-dom"

interface Props{
    isAllowed: boolean
    children?: React.ReactNode // todo lo que react puede renderizar 
}

const ProtectedRoute = ({isAllowed,children}: Props) => {
    if(!isAllowed) return <Navigate to="/Login" />
    return children ? <>{children} </> : <Outlet/> //outlet se usa para poder que las rutas hijas se muestren
}


export default ProtectedRoute