import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { RequireAuth } from "react-auth-kit";

import { AuthProvider } from "react-auth-kit";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <Navbar />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <RequireAuth loginPath="/login">
                  <Home />
                </RequireAuth>
              }
            ></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
