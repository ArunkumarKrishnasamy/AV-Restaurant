import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./Components/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="container content">
        Hello world
        <Routes>
          <Route path="/" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
