import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages and components
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from "./components/Navbar";

function App() {
  const  { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Routes>
            <Route 
              path="/"
              element={!user ? <Navigate to="/login" /> : <Home/> }
            />

            <Route 
              path="/login"
              element={user ? <Navigate to="/" /> : <Login/>} 
            />

            <Route 
              path="/signup"
              element={user ? <Navigate to="/" /> : <Signup/>}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
