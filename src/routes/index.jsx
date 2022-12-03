import { Route, Routes } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";

const RoutesContainer = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
  </Routes>
);

export default RoutesContainer;
