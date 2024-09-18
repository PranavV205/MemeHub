import React from "react"
import ReactDom from "react-dom/client"
import "./index.css"

import Memegen from "./components/memegen/Memegen.jsx"
import Landing from "./components/landing/Landing.jsx"

import {RouterProvider, createHashRouter } from "react-router-dom"

const router = createHashRouter([

    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/memegen",
      element: <Memegen />,
    },
])
  

ReactDom.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
