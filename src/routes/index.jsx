//* Libraries imports
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Header from "../views/LandingPage/Header";

//* Routes imports
import LandingPage from "../views/LandingPage/LandingPage";
import ProductView from "../views/ProductView/ProductView";

const RoutesContainer = () => (
  <div className="flex flex-col mt-5">
    <Header />
    
    <Navbar />

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:category_param" element={<LandingPage />} />
      <Route path="/product/:id" element={<ProductView />} />
    </Routes>

    <Footer />
  </div>
);

export default RoutesContainer;
