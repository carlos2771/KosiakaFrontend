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

type Comida = {
    comida : IComida[]
}
type ComidaActions = {
    setComida : (comida:any) => void
    updateToComida : (comida:any) => void
}

export const useComidasStore =  create(persist<Comida & ComidaActions>((set) =>({
    comida: [],

    setComida : (comida: any) =>set(() =>({
        comida
    })),
    updateToComida: (item: any) =>
        set((state) => ({
          comida: state.comida.map(i => i._id === item._id ? {...i, inCart:true} : i),
        })),
    }),
    {
        name:"comida"
    } 
))