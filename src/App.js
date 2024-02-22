import Header from "./components/Header";
import TrialPage from "./pages/TrialPage";
import LoginPage from "./pages/LoginPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";




axios.defaults.baseURL = "https://deployment-testing-backend.onrender.com:3000";


function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<TrialPage />} />
        <Route path="/login" element={<LoginPage />} />



      </Routes>
    </Router>
  );
}

export default App;
