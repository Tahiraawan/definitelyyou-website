import { Route, Routes } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import PageLayout from './layout/PageLayout';
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<PageLayout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
