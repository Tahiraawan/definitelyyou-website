import { Route, Routes } from "react-router-dom";
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/signup" element={<SignUpForm />} />
     </Routes>
    </div>
  );
}

export default App;
