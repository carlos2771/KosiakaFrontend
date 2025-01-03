import axiosInstance from "../libs/axios";
interface LoginResponse {
    token : string
}

export const loginRequest = async (email: string, password: string) : Promise<LoginResponse> => {
   
        const res = await axiosInstance.post("/login", {
            email,
            password
        })
        const data: LoginResponse = res.data
        
        return data 
    
}


export const getPedidos = async() => {
    try {
        return await axiosInstance.get("/pedidos")
    } catch (error) {
        console.log(error);
        
    }
}