import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/LoginPage/Login.jsx'
import Redirect from './components/Redirect/Redirect.jsx'
import User_Landing_page from './components/User_Landing_page/User_Landing_page.jsx'
import { Provider } from 'react-redux'
import {store} from './store/store.js'
import GuestLogin from './components/guestLogin/guestLogin.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Redirect />}/>
    <Route path='Login' element={<Login />}/>
    <Route path='Login/apiError' element={<Login error = "api"/>}/>
    <Route path='Login/user404' element={<Login error = "user"/>}/>
    <Route path='User/:userId' element={<User_Landing_page />}/>
    <Route path='User/' element={<Redirect />}/>
    <Route path='Guest' element={< GuestLogin/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
