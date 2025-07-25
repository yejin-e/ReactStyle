import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./MainPage";
import GoogleStyledComponents from "./GoogleStyledComponents";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/styled" element={<GoogleStyledComponents />} />
        <Route path="/tailwind" element={<>tailwind</>} />

        <Route path="*" element={<>404 Not Found</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
