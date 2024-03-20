import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcomePage";
import HomeMain from "./pages/home/index.tsx";
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomeMain />} />
      </Routes>
    </Router>
  );
}
