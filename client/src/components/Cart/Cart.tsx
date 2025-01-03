import { MdFastfood } from "react-icons/md";
import { usePedidosStorage } from "../../store/pedidos";
import { useCartStorage } from "../../store/cart";

import "./Cart.css"
import { useState } from "react";



export default function Cart() {
    const { comida, deleteToComida} = usePedidosStorage(state => state)
 
    console.log(comida);
    
    const { showCart } = useCartStorage(state => state)

 

    return (
        <div>
            <MdFastfood />
            {comida.length}
            <div className="mains">
                {
                    showCart ? <div className="cart-container">
                        {comida.length > 0 ? comida.map((item:any) => (
                            <div className="cart">
                                <img className="img-cart" src="https://www.elespectador.com/resizer/v2/ZQUGSWWM2BBZXHEPBPMRIWX46U.jpg?auth=fba19f13a18b1a314f32e083e9d0727fbbe153571721015b63a21613680c519e&width=920&height=613&smart=true&quality=60" alt="" />
                                <div className="cart-content">
                                <h3 className="cart-title">{item.nombre}</h3>
                                <h3 className="cart-title">{item.estado}</h3>
                                <h3 className="cart-title">{item.inCart}</h3>
                                
                                
                                <button onClick={()=> deleteToComida(item)} >sacars</button>
                                <p className="cart-precio">${item.precio}</p>
                                </div>
                                
                            </div>
                        )) : <div>No hay pedidos</div>}
                        
                        <div className="total">total: </div> 
                    </div> : null
                }
            </div>



        </div>
    )
}
