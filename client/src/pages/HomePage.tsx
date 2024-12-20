
import { useAuthStore } from '../store/auth'
import { useNavigate } from 'react-router-dom'
export default function HomePage() {
    const navigate = useNavigate()
    const {logOut} = useAuthStore(state => state)
  return (
    <div>HomePage

        <button onClick={() => {
            logOut()
            navigate("/login")
        }}>Salir </button>


    </div>
  )
}
