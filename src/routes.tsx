import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Layout from "./components/Layout"
export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route  path="transactions" element={<Home/>}/>
                    <Route  path="analytics" element={<Home/>}/>
                    <Route  path="accounts" element={<Home/>}/>
                    <Route  path="wallet" element={<Home/>}/>
                </Route>
                <Route path="*" element={<Navigate to={'/'}/>}/>
            </Routes>
        </Router>
    )
}