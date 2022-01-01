import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// components
import { Navbar } from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import { DeletedTransactions } from "./pages/home/DeletedTransactions";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate replace to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate replace to="/" />}
            />
            <Route
              path="/deleted-transactions"
              element={
                !user ? <Navigate replace to="/" /> : <DeletedTransactions />
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
