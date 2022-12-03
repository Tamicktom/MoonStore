//* Libraries imports
import { Route, Routes } from "react-router-dom";

//* Routes imports
import LandingPage from "../views/LandingPage/LandingPage";
import ProductView from "../views/ProductView/ProductView";

const RoutesContainer = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/product/:id" element={<ProductView />} />
  </Routes>
);

export default RoutesContainer;
