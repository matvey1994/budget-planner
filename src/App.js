import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from './theme'

// pages and components
import Main from './pages/main/Main'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Page from './pages/404'
import Budget from './pages/Budget'
import Goals from './pages/Goals'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import Wallets from './pages/Wallets'
import { GlobalStyles } from '@mui/system';

const theme = createTheme();

function App() {
  const  { authIsReady, user } = useAuthContext()

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles styles={`
            body {
              font-family: 'Poppins', sans-serif;
              margin: 0;
              font-size: 1.1em;
              background: #F1F4F9;
            }
            ul, li, p, h1, h2, h3, h4 {
              margin: 0;
              padding: 0;
            }
            ul {
              list-style-type: none;
            }
            .btn {
              background: none;
              border: 2px solid #1f9751;
              padding: 6px 12px;
              border-radius: 4px;
              color: #1f9751;
              font-weight: bold;
              cursor: pointer;
              font-size: 1em;
            }
            .btn:hover {
              background: #1f9751;
              color: #fff;
            }
        `}/>
      <div className="App">
        {authIsReady && (
          <BrowserRouter>
            <Routes>
              <Route 
                path="/"
                element={!user ? <Navigate to="/login" /> : <Main/> }
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
                path="*"
                element={<Page/>}
              />
              
              <Route 
                path="/budget"
                element={!user ? <Navigate to="/" /> : <Budget/>}
              />

              <Route 
                path="/wallet"
                element={!user ? <Navigate to="/" /> : <Wallets/>}
              />

              <Route 
                path="/reports"
                element={!user ? <Navigate to="/" /> : <Reports/>}
              />

              <Route 
                path="/goals"
                element={!user ? <Navigate to="/" /> : <Goals/>}
              />

              <Route 
                path="/settings"
                element={!user ? <Navigate to="/" /> : <Settings/>}
              />

            </Routes>
          </BrowserRouter>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
