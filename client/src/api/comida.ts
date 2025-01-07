import axiosInstance from "../libs/axios";

interface ComidaResponse {
    comida: object
}

interface IComida {
    nombre: string;
    ingredientes: string
    precio: number;
    categoria: string; // por el momento mientras creo la nueva coleccion para hacer referencia
    estado: boolean;
    inCart:boolean

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

export const updateComidaRequest = async(id:string, body: IComida) => { // por el momento mientras creo la nueva coleccion para hacer referenciaestado,inCart,}) : Promise<ComidaResponse> =>{
    console.log("entro");
    console.log(id);
    console.log(body);
    
    
    
    return await axiosInstance.put(`/comida/${id}`, body)
  
}
