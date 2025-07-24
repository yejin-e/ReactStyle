import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./MainPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/styled" element={<>styled-components</>} />
        <Route path="/tailwind" element={<>tailwind</>} />

        <Route path="*" element={<>404 Not Found</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
