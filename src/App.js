import React from "react";
import "./assets/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./Components/ProductList/ProductList";
import ProductForm from "./Components/ProductForm/ProductForm";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/junior-assignment"  element={<ProductList />} />
          <Route path="/ProductForm" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
