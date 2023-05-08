import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inventory from "./Components/Inventory";
import Home from "./Components/Home";
import AddComponent from "./AddComponent";
import Login from "./LogIn/Login";
import Registration from "./LogIn/Registration";
import Success from "./LogIn/Success";

function App() {
  return (
    <BrowserRouter>
      <div className="container content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<AddComponent />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          {/* <Route path="/success" element={<Success />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
