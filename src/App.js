import { Routes, Route } from "react-router-dom";

import Navbar from "./components/widgets/navbar";
import Footer from "./components/widgets/footer";
import HomePage from "./pages/home";
// import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import PortfolioPage from "./pages/portfolio";
import ServicePage from "./pages/service";
import TeamPage from "./pages/team";
import AboutPage from "./pages/about";

export default function App() {
  return (
    <>
      <div
        className="h-screen bg-gray-700 bg-center bg-cover"
      >
        <Navbar />
        <Routes>
          <Route path="/" index element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
