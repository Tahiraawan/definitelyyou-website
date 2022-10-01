import { Route, Routes } from "react-router-dom";

import SignUpForm from './components/SignUpForm';

import LoginForm from "./components/LoginForm";
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/login" element={<LoginForm/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
