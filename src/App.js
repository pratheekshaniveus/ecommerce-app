import "./App.css";
import Navbar from "./Layout/Navbar";
import Products from "./Layout/Products";
import Footer from "./Layout/Footer";
import Cart from "./Layout/Cart";
import Wishlist from "./Layout/Wishlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="Login" element={<Navbar />} />
          <Route path="Products" element={<Products />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
