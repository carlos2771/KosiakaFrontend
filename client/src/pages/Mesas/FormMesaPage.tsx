import { SubmitHandler, useForm } from 'react-hook-form'
import { mesasRequest } from '../../api/mesas'

type Inputs = {
    numero: string,
    estado: boolean
}

export default function FormMesaPage() {

  
const {
        register,
        handleSubmit
    } = useForm<Inputs>({
        defaultValues:{
            estado: true
        }
    })

    const onSubmit : SubmitHandler<Inputs> = async(data) => {
        try {
            console.log("tipo",typeof data.estado);
            
            const res = await mesasRequest(data.numero, data.estado)
            console.log("respuesta de la mesa",res);
            
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <input placeholder='numero' {...register("numero",{required: true})} />
    <select {...register("estado")}>
        <option value="true">activa</option>
        <option value="false">inactiva</option>

    </select>
  

    <input type="submit" />

  </form>
  )
}
