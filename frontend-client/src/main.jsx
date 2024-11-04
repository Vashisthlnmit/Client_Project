import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from './Store/store.js'
import {Provider} from "react-redux"
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import Signin from './Components/Signin.jsx'
import Contactus from './Components/Contactus.jsx'
import ResetPassword from './Components/ResetPassword.jsx'
import FirstPage from './Components/SigninFirstPage.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route element={<Layout/>}>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/contact" element={<Contactus/>}/>
      <Route path='/reset' element={<ResetPassword/>}/>
    </Route>
    <Route path='/' element={<FirstPage/>}>

    </Route>
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      </RouterProvider>
  </Provider>,
)
