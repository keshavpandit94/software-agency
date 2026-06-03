import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // <-- Added this back!
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* This fixes the issue where new pages don't start at the top */}
      <ScrollToTop /> 

      <div className="font-sans text-gray-800 relative min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content Area - Home handles its own padding, others get pt-28 to clear the fixed navbar */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<div className=""><Services /></div>} />
            <Route path="/portfolio" element={<div className=""><Portfolio /></div>} />
            <Route path="/pricing" element={<div className=""><Pricing /></div>} />
            <Route path="/reviews" element={<div className=""><Testimonials /></div>} />
            <Route path="/contact" element={<div className=""><Contact /></div>} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;