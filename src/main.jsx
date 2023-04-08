import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Shop from './components/Shop/Shop'

const router= createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:'/shop',
                element:<Shop></Shop>
            }
        ]

    },
    
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
