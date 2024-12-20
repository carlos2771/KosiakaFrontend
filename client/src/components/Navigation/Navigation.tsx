
import { Link } from 'react-router-dom'
import "./Navigation.css"

export default function Navigation() {
  return (
    <div>

    <nav className='navigation-nav'>
        <div>
            <h1 className='title'>Kosiaka</h1>
        </div>
        
        <div className='list'>

        <ul className='list-nav'>
            <li className='list-nav-li'>
                <Link className='list-nav-li-a' to="/" >Home</Link>
            </li>
            <li className='list-nav-li'>
                <Link className='list-nav-li-a'to="/login" >Login</Link>
            </li>
            <li className='list-nav-li'>
                <Link className='list-nav-li-a'to="/mesas">Registrarse</Link>
            </li>
        </ul>
        </div>
    </nav>
    </div>
  )
}
