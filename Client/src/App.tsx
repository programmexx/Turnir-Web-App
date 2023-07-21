import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/LoginNSignup/LoginNSignup";
import Success from "./pages/Success/Success";
// import Text from "./api/text";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
