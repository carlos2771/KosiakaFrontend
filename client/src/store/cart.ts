import { create } from "zustand";

type cartState = {
    showCart : boolean
}

type cartActions = {
    setShowCart : (value: boolean) => void
}


export const useCartStorage = create<cartState & cartActions>()((set) => ({
    showCart : false,
    setShowCart : (value: boolean) => set(() => ({
        showCart: value
    }))
    }
))
