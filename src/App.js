import { Route, Routes } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import PageLayout from './layout/PageLayout';

import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />       

        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
