import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';

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

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
