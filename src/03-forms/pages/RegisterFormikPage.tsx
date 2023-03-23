import { Form, Formik } from "formik";
import "../styles/styles.css";
import * as Yup from 'yup';
import { MyTextInput } from "../components";




export const RegisterFormikPage = () => {
    
       

    return (
    <div>
        <h1>RegisterFormikPage</h1>
        <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit={(values)  =>{
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                                    .min(2, 'El nombre debe ser de 3 carateres o mas')
                                    .max(15, 'El nombre debe ser menor de 15 caracteres')
                                    .required('Requerido'),
                    email: Yup.string()
                                    .email('Revise el formato del correo')
                                    .required('Requerido'),
                    password1: Yup.string()
                                    .min(6, 'Minimo 6 letras')
                                    .required('Requirdo'),
                    password2: Yup.string()
                                    .oneOf([ Yup.ref('password1')], 'Las contraseñas no son iguales')
                                    .required('Requerido')

                            })
                    
            }
            >
            
            {({handleReset}) => (
                <Form>
                    <MyTextInput
                        label="Nombre"
                        name="name"
                        placeholder="Joaq"
                    />
                    <MyTextInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="john@google.com"
                    />
                    <MyTextInput
                        label="Password"
                        name="password1"
                        type="password"
                        placeholder="******"
                    />
                    <MyTextInput
                        label="Confirm Password"
                        name="password2"
                        type="password"
                        placeholder="******"
                    />

                    <button type="submit">Create</button>
                    <button type="button"onClick={handleReset}>Reset Form</button>
                </Form>
            )}

        </Formik>

      
    </div>
  )
}

export default RegisterFormikPage

    

