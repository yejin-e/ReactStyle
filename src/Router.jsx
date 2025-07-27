import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import GoogleStyled from "./components/styled/GoogleStyled";
import GoogleTailwind from "./components/tailwinds/GoogleTailwind";
import TodoTailwind from "./components/tailwinds/TodoTailwind";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/styledGoogle" element={<GoogleStyled />} />
        <Route path="/tailwindGoogle" element={<GoogleTailwind />} />

        <Route path="/styledTodolist" element={<>a</>} />
        <Route path="/tailwindTodolist" element={<TodoTailwind />} />

        <Route path="*" element={<>404 Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
