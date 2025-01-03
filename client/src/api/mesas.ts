import axiosInstance from "../libs/axios";

interface MesaResponse {
    mesa: object
}


export const mesasRequest = async (numero: string, estado: boolean) :Promise<MesaResponse> => {
    
    const res = await axiosInstance.post("/mesas",{
        numero,
        estado
    })
    
    const data : MesaResponse = res.data
    return data
    
}