import React from "react"
import ReactDom from "react-dom/client"
import "./index.css"

import Memegen from "./components/memegen/Memegen.jsx"
import Landing from "./components/landing/Landing.jsx"
import About from "./components/About/About.jsx"

import {RouterProvider, createHashRouter } from "react-router-dom"
import Developer from "./components/Developer/Developer.jsx"

const router = createHashRouter([

    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/memegen",
      element: <Memegen />,
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/developer',
      element: <Developer/>
    },
])
  

ReactDom.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
