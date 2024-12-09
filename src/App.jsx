import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import { Login } from "./components/User/Login";
import { Signup } from "./components/User/Signup";
import DashboardLayout from "./layout/DashboardLayout";
import BrandDetail from "./components/Brand/BrandDetail";
import { Dashboard } from "./pages/Dashboard";
import { BrandPage } from "./pages/BrandPage";
import { ProductPage } from "./pages/ProductPage";
import { PageNotFound } from "./pages/PageNotFound";
import ProductDetail from "./components/Product/ProductDetail";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <>
            {/* Auth routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Redirecting unauthenticated users back to login */}
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            {/* Dashboard routes */}
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="brands" element={<BrandPage />} />
              <Route path="brands/:brandId" element={<BrandDetail />} />
              <Route path="products" element={<ProductPage />} />
              <Route path="products/:productId" element={<ProductDetail />} />
              <Route path="not-implemented" element={<PageNotFound />} />
            </Route>
            {/* Redirect authenticated users */}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
