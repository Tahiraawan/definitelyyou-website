import { Route, Routes } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import PageLayout from './layout/PageLayout';

import ProductCard from "./components/ProductCard";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

import ProductPage from "./pages/ProductPage";

import CheckOut from "./pages/CheckOut";
import ThankYou from "./pages/ThankYou";


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

          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="/thankyou" element={<ThankYou/>}/>


        </Route>
      </Routes>
    </div>
  );
}

export default App;
