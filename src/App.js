import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
