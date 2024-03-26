import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import WelcomePage from "./pages/welcomePage/index.tsx";
import Home from "./pages/homeMain/index.tsx";
import { AuthProvider } from "./contexts/auth.tsx";

export default function AppRouter() {
  const Private = ({ children }: { children: React.ReactNode }) => {
    const token = localStorage.getItem("token");

    if (!token) return <Navigate to="/" replace />;
    return <>{children}</>;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/home"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
