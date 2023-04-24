import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./Components/Product";
import ProductInfo from "./ProductInfo";
import Inventory from "./Components/Inventory";

function App() {
  return (
    <BrowserRouter>
      <div className="container content">
        <Product />
        <Routes>
          <Route path="/" element={<ProductInfo />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
