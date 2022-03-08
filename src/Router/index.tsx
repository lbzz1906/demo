import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Demo from "../pages/Demo";

const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  </BrowserRouter>
);
export default BaseRouter;
