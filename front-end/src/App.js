import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./comp/Home";
import Login from "./comp/Login";
import Signup from "./comp/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              window.localStorage.getItem("token") ? (
                <Home />
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
          <Route
            path="/signup"
            element={
              window.localStorage.getItem("token") ? (
                <Navigate replace to={"/"} />
              ) : (
                <Signup />
              )
            }
          />
          <Route
            path="/login"
            element={
              window.localStorage.getItem("token") ? (
                <Navigate replace to={"/"} />
              ) : (
                <Login />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
