import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import FormMesaPage from "./pages/Mesas/FormMesaPage";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuthStore } from "./store/auth";
import Sidebar from "./components/SideBar/Sidebar";
import { useSidebar } from "./store/sidebar";
import Header from "./components/Header/Header";
import CardComida from "./components/Comida/CardComida";


export default function App() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const {showNav} = useSidebar(set => set)

  return (
    <BrowserRouter>
    {!isAuth ? <Navigation /> : <div hidden><Navigation/> </div>}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Rutas protegidas */}
        <Route
          element={
            <ProtectedRoute isAllowed={isAuth}>
              <Header/>
               <Sidebar show={showNav} /> 
              <CardComida /> 
               
            </ProtectedRoute>
          }
        >
          <Route path="/mesas" element={<FormMesaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
