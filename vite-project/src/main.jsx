import React from 'react'
import ReactDOM from 'react-dom/client'
import {route} from './route'
import './index.css'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
