import { create } from "zustand";

type sideState = {
    showNav : boolean
}

type sideActions = {
    setShowNav : (value: boolean) => void
}


export const useSidebar = create<sideState & sideActions>()((set) => ({
    showNav : false,
    setShowNav : (value: boolean) => set(() => ({
        showNav: value
    }))

    }
))
