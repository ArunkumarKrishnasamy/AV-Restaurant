import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inventory from "./Components/Inventory";
import Home from "./Components/Home";
import AddComponent from "./AddComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="container content">
        <Routes>
          <Route path="/" element={<AddComponent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
