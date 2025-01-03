import { useEffect, useState } from "react";
import { getComidaRequest } from "../../api/comida";
import "../Comida/CardComida.css";
import { usePedidosStorage } from "../../store/pedidos";

interface IComida {
  _id: string;
  nombre: string;
  ingredientes: string;
  precio: number;
  categoria: string; // por el momento mientras creo la nueva coleccion para hacer referencia
  estado: boolean;
  inCart: boolean;
}

export default function CardComida() {
  const { comida, addToComida } = usePedidosStorage(set => set);

  const [comidaState, setComidaState] = useState<IComida[]>([]);

  const getComida = async () => {
    const res = await getComidaRequest();
    setComidaState(res?.data);
  };

  useEffect(() => {
    getComida();
  }, [comida]);

  const handleAddToCart = (item: any) => {
    const updatedItem = { ...item, inCart: true };  // Marcar el item como agregado al carrito
    addToComida(updatedItem);  // Llamar la función para agregarlo al pedido
    setComidaState(state => 
      state.map(i => i._id === item._id ? updatedItem : i)
    );  
  };

  return (
    <div className="card-container">
      {comidaState.map((item: any) => (
        <div className="card" key={item._id}>
          <img
            className="img-card"
            src="https://www.elespectador.com/resizer/v2/ZQUGSWWM2BBZXHEPBPMRIWX46U.jpg?auth=fba19f13a18b1a314f32e083e9d0727fbbe153571721015b63a21613680c519e&width=920&height=613&smart=true&quality=60"
            alt=""
          />
          <div className="card-content">
            <h3 className="card-title">{item.nombre}</h3>
            <h4 className="card-categoria">({item.categoria})</h4>
            <p className="card-text">{item.ingredientes}</p>
            <p className="card-precio">${item.precio}</p>

            <p className="card-precio">InCart: {item.inCart ? "Sí" : "No"}</p>
            {!item.inCart && (
              <button
                className="btn-card"
                onClick={() => handleAddToCart(item)}
              >
                <p>Agregar al pedido</p>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
