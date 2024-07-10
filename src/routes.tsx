import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Layout from "./components/Layout"
export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index path="home" element={<Home/>}/>
                    <Route index path="transactions" element={<Home/>}/>
                    <Route index path="analytics" element={<Home/>}/>
                    <Route index path="accounts" element={<Home/>}/>
                    <Route index path="wallet" element={<Home/>}/>
                </Route>
            </Routes>
        </Router>
    )
}