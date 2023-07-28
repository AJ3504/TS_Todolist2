import Home from "../pages/Home";
import Details from "../pages/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:todoId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
