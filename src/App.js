import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Account from "./components/Account";
import Home from "./components/Home";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        Firebase Auth & Context
      </h1>
      <BrowserRouter>
        <UserAuthContextProvider>
          <Routes>
            
            {/* <Route path="/" element={<ProtectedRoute> <Home /></ProtectedRoute>} /> */}
            <Route path="/" element={ <Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/account" element={<Account />} /> */}
            <Route path="/account" element={<ProtectedRoute> <Account /></ProtectedRoute>} />
            {/* <Route path="/" element={<ProtectedRoute> <Home /></ProtectedRoute>} /> */}
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
