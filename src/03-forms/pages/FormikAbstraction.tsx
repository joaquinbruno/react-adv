import {   Formik, Form } from 'formik'
import * as Yup from 'yup';

// import MySelect from '../components/MySelect';
// import MyTextInput from '../components/MyTextInput';
// import MyCheckbox from '../components/MyCheckbox';

import { MyCheckbox, MySelect, MyTextInput } from '../components/index'

import '../styles/styles.css'

export const FormikAbstraction = () => {

   return (
    <div>
        <h1>FormikAbstraction</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                lastName: Yup.string()
                                    .max(10, 'Debe de tener 10 caracteres o menos')
                                    .required('Requerido'),
                email: Yup.string()
                                    .email('Emal no tiene un formato válido')
                                    .required('Requerido'),
                terms: Yup.boolean()
                                    .oneOf([true], 'Debe de aceptar las condiciones'),
                                    
                 jobType: Yup.string()
                                    .notOneOf([ 'it-jr'], 'Esta opción no es permitida.')
                                    .required('Requerido')
            })  
            }
        >
            {
                (formik) => (
                    <Form noValidate>

                        <MyTextInput label="first name" name="firstName"  placeholder='Joaquin'/>
                        <MyTextInput label="Last  Name" name="lastName"  placeholder='Bruno'/>
                        <MyTextInput label="Email Adress" name="email"  placeholder='john@google.com' type="email"/>

                        <MySelect label="Job Type" name="jobType">
                            <option value= ""> Pick Something</option>
                            <option value= "Developer">Developer</option>
                            <option value= "Designer">Designer</option>
                            <option value= "it-senior">IT SENIOR</option>
                            <option value= "it-jr"> IT-JR</option>
                        </MySelect>

                        <MyCheckbox label="terms & Conditions" name="terms"/>

            <button type="submit">
                Submit
            </button>
                    </Form>
                )
            }
        </Formik>
        
    </div>
  )
}

export default FormikAbstraction

