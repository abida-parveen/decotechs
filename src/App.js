import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Slab from "./components/main/home/Slab";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthRoutes from "./routes/AuthRoutes";
import NoauthRoutes from "./routes/NoauthRoutes";
import { getCurrentUser } from "./state-management/actions/user";

function App(props) {
  useEffect(() => {
    props.getCurrentUser()
  }, [props]);
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route element={<AuthRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/slab" element={<Slab />} />
        </Route>
        <Route element={<NoauthRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
export default connect(null, {getCurrentUser} )(App);
