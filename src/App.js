import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import Products from "./pages/Products";
import About from "./pages/About";
import Help from "./pages/Help";

import Header from "./components/Header";

function App() {
  return (
      <Router>
          <Fragment>
              <Header />
              <Routes>
                  <Route exact path="/" element={<Welcome />} />
                  <Route exact path="/products" element={<Products />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/help" element={<Help />} />
                  <Route exact path="/product/:productId" element={<Product />} />
              </Routes>
          </Fragment>
      </Router>
  );
}

export default App;
