import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "@/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Boats from "./pages/Boats";
import Activities from "./pages/Activities";
import About from "./pages/About";
import Book from "./pages/Book";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boats" element={<Boats />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Book />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
