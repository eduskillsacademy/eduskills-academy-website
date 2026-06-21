import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Home from "./pages/Home";
import SchoolBoards from "./pages/SchoolBoards";
import SkillsProgramsList from "./pages/SkillsProgramsList";
import SkillProgramDetail from "./pages/SkillProgramDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Enroll from "./pages/Enroll";

function ScrollToTop() {
  // Ensures route changes start at the top of the page
  if (typeof window !== "undefined") {
    window.scrollTo?.(0, 0);
  }
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/school-boards" element={<SchoolBoards />} />
            <Route path="/skills-programs" element={<SkillsProgramsList />} />
            <Route path="/skills-programs/:slug" element={<SkillProgramDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enroll" element={<Enroll />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}
