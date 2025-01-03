
import "./Header.css"
import { CiMenuBurger } from "react-icons/ci";
import { useSidebar } from '../../store/sidebar'
import Cart from "../Cart/Cart";
import { useCartStorage } from "../../store/cart";
function Header() {
  
    const {setShowNav ,showNav} = useSidebar(set => set)
    const {showCart, setShowCart} = useCartStorage(set=> set)
    
    
  return (
    <header>
         <CiMenuBurger onClick={()=> setShowNav(!showNav)}/>
          <div onClick={()=> setShowCart(!showCart)}>
          <Cart />
          </div>
    </header>
  )
}

export default Header