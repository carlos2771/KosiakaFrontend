import {create} from "zustand"
import { persist } from 'zustand/middleware'

type Auth = {
    token : string;
    pedido: any
    isAuth : boolean
}
type Actions = {
    setTokent : (tokent: string) => void
    setPedido : (pedido: any) => void
    logOut : () => void
}

export const useAuthStore = create(persist<Auth & Actions>((set) => ({
    token: "",
    isAuth: false,
    pedido: null,

    setTokent: (token: string) => set(() => ({
        token, 
        isAuth: true
     })),

     logOut: () => set(() => ({
        token: "",
        isAuth: false
     })),

     setPedido: (pedido: any) => set(() => ({
         pedido
     })),


    }),

    {
        name: 'auth'
        
    }
))

