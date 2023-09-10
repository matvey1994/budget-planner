import { BrowserRouter, Route, Redirect, Routes } from "react-router-dom";
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
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
              {/* {!user && <Redirect to="/login" />}
              {user && <Home />} */}

            <Route path="/login" element={<Login/>} />
              {/* {user && <Redirect to="/" />}
              {!user && <Login />} */}

            <Route path="/signup" element={<Signup/>} />
              {/* {user && <Redirect to="/" />}
              {!user && <Signup />} */}

          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
