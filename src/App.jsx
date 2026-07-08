import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import WorkDetails from "./Pages/WorkDetails";
// import Contact from "./Pages/Contact";
// import OurWork from "./Pages/OurWork";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-[2000px] mx-auto px-4 md:px-6">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

        <Route path="/our-work/:type" element={<WorkDetails />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;