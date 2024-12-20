import { create } from "zustand";
import { persist } from "zustand/middleware";

type Mesa = {
    mesa: object
}

type MesaActions = {
    setMesa: (mesa: object) => void
}

export const useMesasStore = create(persist<Mesa & MesaActions>((set) => ({
    mesa: {},

    setMesa: (mesa: object) => set(() => ({
        mesa
    }))

    }),
    
    {
    name: "mesa"
    }

))