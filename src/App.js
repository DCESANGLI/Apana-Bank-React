import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import DashboardHome from './pages/dashboard/Index';
import Transaction from './pages/dashboard/Transaction';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Layout />}>
                  <Route path="" element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<SignUp />} />
                </Route>

                <Route path="dashboard" element={<DashboardHome />}>
                  <Route path="" element={<Transaction />} />
                </Route>

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
