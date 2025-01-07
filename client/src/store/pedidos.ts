import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IComida {
  _id: string;
  nombre: string;
  ingredientes: string;
  precio: number;
  categoria: string; // por el momento mientras creo la nueva coleccion para hacer referencia
  estado: boolean;
  inCart: boolean;
}

type Pedido = {
  comidaCart: IComida[]; // Cambiar el tipo según el contenido esperado
 
};

type PedidoActions = {
  addToComida: (item: IComida) => void;
  deleteToComida : (item: IComida) => void;
  updateToComida: (item: IComida) => void;
 
};

export const usePedidosStorage = create(
  persist<Pedido & PedidoActions>(
    (set) => ({
      comidaCart: [],
    

      addToComida: (item: IComida) =>
        set((state) => ({
          comidaCart: [...state.comidaCart, item],
        })),
      deleteToComida: (item: IComida) =>
        set((state) => ({
          comidaCart: state.comidaCart.filter((cd) => cd._id  !== item._id ),
        })),
      updateToComida: (item: IComida) =>
        set((state) => ({
          comidaCart: state.comidaCart.map(i => i._id === item._id ? {...i, inCart:false} : i),
        })),
    }),
    {
      name: "pedidos",
    }
  )
);
