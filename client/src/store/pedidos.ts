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
  comida: IComida[]; // Cambiar el tipo según el contenido esperado
  btbAvailable: boolean;
};

type PedidoActions = {
  addToComida: (item: IComida) => void;
  deleteToComida : (item: IComida) => void;
 
};

export const usePedidosStorage = create(
  persist<Pedido & PedidoActions>(
    (set) => ({
      comida: [],
      btbAvailable: true,

      addToComida: (item: IComida) =>
        set((state) => ({
          comida: [...state.comida, item],
        })),
      deleteToComida: (item: IComida) =>
        set((state) => ({
          comida: state.comida.filter((cd) => cd._id  !== item._id ),
        })),
    }),
    {
      name: "pedidos",
    }
  )
);
