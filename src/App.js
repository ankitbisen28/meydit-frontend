import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";

import { RequireAuth } from "react-auth-kit";
import { UserDetail } from "./pages/UserDetail";
import { UserContextProvider } from "./Context/UserContext";
import { PostJob } from "./pages/PostJob";

function App() {
  return (
    <>
      <Router>
        <UserContextProvider>
          <Navbar />
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
            <Route path="/about" element={<About />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/userDetail" element={<UserDetail />}></Route>
            <Route path="/postJob" element={<PostJob />}></Route>
          </Routes>
        </UserContextProvider>
      </Router>
    </>
  );
}

export default App;
