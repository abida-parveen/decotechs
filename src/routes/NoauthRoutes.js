import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../state-management/actions/user";

const NoauthRoutes = (props) => {
  const user = props.currentUser;
  return !user ? <Outlet /> : <Navigate to="/" />;
};

const mapStateToProps = (state) => ({
  currentUser: state.user,
});

export default connect(mapStateToProps, { getCurrentUser })(NoauthRoutes);
