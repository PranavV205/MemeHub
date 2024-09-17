import React from "react"
import ReactDom from "react-dom/client"
import "./index.css"

import Memegen from "./components/memegen/Memegen.jsx"
import Landing from "./components/landing/Landing.jsx"

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Landing/>}/>
            <Route path="/memegen" element={<Memegen/>}/>
        </>
    )
)

ReactDom.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
