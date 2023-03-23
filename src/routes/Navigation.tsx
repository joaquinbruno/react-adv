import { BrowserRouter, Navigate } from "react-router-dom"
import {Routes, Route, NavLink} from "react-router-dom";

import {
        FormikAbstraction, 
        FormikBasicPage, 
        FormikComponents, 
        RegisterPage,FormikYupPage, 
        RegisterFormikPage, 
        DynamicForm} 
from "../03-forms/pages/index"

import logo from '../logo.svg'






export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="react logo"/>
                <ul>
                  <li>
                    <NavLink to="/register" className={ ({isActive}) => isActive ? 'nav-active' : ''}>RegisterPage</NavLink>
                  </li>
                  <li>
                    <NavLink to="/formik-basic" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
                  </li>
                  <li>
                    <NavLink to="/formik-yup" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
                  </li>
                  <li>
                    <NavLink to="/formik-components" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
                  </li>
                  <li>
                    <NavLink to="/formik-abstraction" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik Abstraction</NavLink>
                  </li>
                  <li>
                    <NavLink to="/formik-RegisterFormikPage" className={ ({isActive}) => isActive ? 'nav-active' : ''}>RegisterFormikPage</NavLink>
                  </li>
                  <li>
                    <NavLink to="/formik-DynamicForm" className={ ({isActive}) => isActive ? 'nav-active' : ''}>DynamicForm</NavLink>
                  </li>
                </ul>
            </nav>

            <Routes>
              
              <Route path="/register" element={ <h1><RegisterPage/></h1>}/>
              <Route path="/formik-basic" element={ <h1><FormikBasicPage/></h1>}/>
              <Route path="/formik-yup" element={ <h1><FormikYupPage/></h1>}/>
              <Route path="/formik-components" element={ <h1><FormikComponents/></h1>}/>
              <Route path="/formik-abstraction" element={ <h1><FormikAbstraction/></h1>}/>
              <Route path="/formik-RegisterFormikPage" element={ <h1><RegisterFormikPage/></h1>}/>
              <Route path="/formik-DynamicForm" element={ <h1><DynamicForm/></h1>}/>
              
            </Routes>
            
        </div>
    </BrowserRouter>
  )
}

