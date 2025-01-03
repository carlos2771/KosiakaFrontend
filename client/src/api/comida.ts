import axiosInstance from "../libs/axios";

interface ComidaResponse {
    comida: object
}

export const comidaRequest = async(nombre: string, ingredientes: string, precio: number,categoria: string): Promise<ComidaResponse> => {
    
    const res = await axiosInstance.post("/comidas", {
        nombre,
        ingredientes,
        precio,
        categoria,
    })

    const data: ComidaResponse = res.data
    return data

}


export const getComidaRequest = async() => {

    try {
        return await axiosInstance.get("/comidas")
    } catch (error) {
        console.log(error);
    }

}