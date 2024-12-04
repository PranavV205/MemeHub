import Layout from "./components/Layout"
import Hero from "./components/Hero"
import Memegen from "./components/Memegen"
import Subreddit from "./components/Subreddit"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="memegen" element={<Memegen />} />
          <Route path="sub" element={<Subreddit/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
