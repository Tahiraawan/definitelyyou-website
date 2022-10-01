import { Route, Routes } from "react-router-dom";
import LoginForm from "./component/LoginForm";
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/login" element={<LoginForm/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
