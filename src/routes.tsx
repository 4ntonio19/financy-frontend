import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcomePage/index.tsx";
import Home from "./pages/index.tsx";
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
