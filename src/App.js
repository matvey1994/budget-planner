import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from './theme'

// pages and components
import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Page from './pages/404'
import Navbar from "./components/Navbar";

const theme = createTheme();

function App() {
  const  { authIsReady, user } = useAuthContext()

  return (
    <ThemeProvider theme={theme}>
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

              <Route 
                path="/404"
                element={<Page/>}
                
              />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
