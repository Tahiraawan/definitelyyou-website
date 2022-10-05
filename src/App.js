import { Route, Routes } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import PageLayout from './layout/PageLayout';

import ProductCard from "./components/ProductCard";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />       

        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
