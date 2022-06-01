import { Route, Routes } from "react-router-dom";
import About from "../views/about";
import Home from "../views/home";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default Routing;
