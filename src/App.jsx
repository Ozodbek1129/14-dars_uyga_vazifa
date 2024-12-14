import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/contact";
import Products from "./components/products";
import Navbar from "./components/navbar";
import Loader from "./components/loader";
import Footer from "./components/footer";
export default function App() {
  const Home = lazy(() => import("./components/Home"));
  const Products = lazy(() => import("./components/products"));
  const Product = lazy(() => import("./components/Product"));
  return (
    <div>
      <Navbar />
      {/* <Router> */}

      <Routes>
        {/* <Suspense fallback={<Loader />}> */}
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/product"
          element={
            <Suspense fallback={<Loader />}>
              <Product />
            </Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products"
          element={
            <Suspense fallback={<Loader />}>
              <Products />
            </Suspense>
          }
        />
        {/* </Suspense> */}
      </Routes>
      <Footer />

      {/* // </Router> */}
    </div>
  );
}
