import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom"
import Home from "./pages/Home/Home"
import Layout from "./components/Layout"
import TransactionForm from "./pages/ManagerTransactions/TransactionForm"
export const AppRoutes = () => {
    const ProtectedRoutes = () => {
        return <Outlet/>
    }


  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProtectedRoutes/>}>
        <Route index element={<Navigate to='/dashboard' />} />
          <Route
            path='/dashboard'
            element={
              <Layout>
                <Home/>
              </Layout>
            }>
            <Route path='addIncome' element={<TransactionForm typeTransaction="income" />} />
            <Route path='addExpense' element={<TransactionForm typeTransaction="expense" />} />
          </Route>
        </Route>
        <Route path='transactions' element={<Home />} />
        <Route path='analytics' element={<Home />} />
        <Route path='accounts' element={<Home />} />
        <Route path='wallet' element={<Home />} />
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  )
}
