import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Product } from "./components/Product/Product";
import { Navbar } from "./components/Navbar/Navbar";
import { Login } from "./components/User/Login";
import { Store } from "./pages/Store/Store";
import { Sidebar } from "./components/Sidebar/Sidebar";
import DashboardLayout from "./layout/DashboardLayout";
import BrandDetail from "./components/Brand/BrandDetail";
import { Dashboard } from "./pages/Dashboard";
import { BrandPage } from "./pages/BrandPage";
import { ProductPage } from "./pages/ProductPage";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  // fetch("https://dummyjson.com/products")
  //   .then((res) => res.json())
  //   .then(console.log);

  return (
    <Router>
      {/* <div className="app">
        <Sidebar />
        <div className="app-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/brands" element={<BrandPage />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </div>
      </div> */}

      <Routes>
        {/* Use DashboardLayout as the wrapper */}
        <Route path="/" element={<DashboardLayout />}>
          {/* <Route index element={<Store />} /> */}
          <Route index element={<Dashboard />} />
          <Route path="brands" element={<BrandPage />} />
          <Route path="/brands/:brandId" element={<BrandDetail />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="not-implemented" element={<PageNotFound />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;

{
  /* <Router>
  <Routes>
    {isLogin ? (
      <div className="app">
        <Sidebar />
        <div className="app-content">
          <Navbar />
          <Route path="/" element={<Store />} />
          <Route path="/brands" element={<BrandPage />} />
          <Route path="/products" element={<ProductPage />} />
        </div>
      </div>
    ) : (
      <Route path="/" element={<Login />} />
    )}
  </Routes>
</Router>; */
}
