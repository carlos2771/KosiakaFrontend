import { create } from "zustand";
import { persist } from "zustand/middleware";

type Comida = {
    comida : object
}
type ComidaActions = {
    setComida : (comida:any) => void
}

export const useComidasStore =  create(persist<Comida & ComidaActions>((set) =>({
    comida: {},

    setComida : (comida: any) =>set(() =>({
        comida
    }))
    }),
    {
        name:"comida"
    } 
))