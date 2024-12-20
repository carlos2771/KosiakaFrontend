import { BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPage from "./pages/Login/LoginPage"
import FormMesaPage from "./pages/Mesas/FormMesaPage"
import HomePage from "./pages/HomePage"
import Navigation from "./components/Navigation/Navigation"
import ProtectedRoute from "./components/ProtectedRoute"
import { useAuthStore } from "./store/auth"
export default function App() {

  const isAuth = useAuthStore(state => state.isAuth)
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />


      <Route element={<ProtectedRoute isAllowed={isAuth} />}>
      
      <Route path="/mesas" element={<FormMesaPage/>} />
      </Route>


    </Routes>

    </BrowserRouter>

  )
}
