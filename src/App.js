import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Recomendations from "./pages/Recomendations";
import Promotions from "./pages/Promotions";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/recomendations" element={<Recomendations />} />
          <Route exact path="/promotions" element={<Promotions />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
