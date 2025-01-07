import { useEffect } from "react";
import { getComidaRequest, updateComidaRequest } from "../../api/comida";
import "../Comida/CardComida.css";
import { usePedidosStorage } from "../../store/pedidos";
import { useComidasStore } from "../../store/comidas";

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
  const {  addToComida, } = usePedidosStorage(set => set);
  const {comida, setComida } = useComidasStore(set => set);




  const getComida = async () => {
    const res = await getComidaRequest();
    setComida(res?.data);
  };


  useEffect(() => {
    getComida();
  }, []);

  const handleAddToCart = (item: IComida) => {
    const updatedItem = { ...item, inCart: true };
    updateComidaRequest(item._id, updatedItem);
    addToComida(item);  
  };

  return (
    <div className="card-container">
      {comida.map((item: any) => (
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
                className= "btn-card"  
                onClick={() =>
                {
                  handleAddToCart(item)
                }
                }
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
