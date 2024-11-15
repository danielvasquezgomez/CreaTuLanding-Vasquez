import { object, string, mixed } from "yup"

let userSchema = object({
    fullname: string().required("campo requerido"),
    phone: mixed().required("campo requerido"),
    email: string().email().required("campo requerido")
})

const validateForm = async(dataForm) => {
    
    try{
        await userSchema.validate(dataForm)
        return {status: "success"}
    }catch(error){
        return {status: "error", message: error.message}
    }
        
}

export default validateForm