import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import menubar from "../../../assets/icons/bars-solid.svg";
import { removeUser } from "../../../state-management/actions/user";
import CustomButton from "../../form/CustomButton";

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const currentUser = useMemo(() => props.currentUser, [props.currentUser]);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeUser());
  };
  return (
    <>
      <nav className="bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold text-xl">
                Decotechs
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              {currentUser ? (
                <>
                  <Link to={"/slab"} className="text-gray-300 hover:text-whitemx-5">
                    Create Slab
                  </Link>
                  <Link className="mx-5">
                    <CustomButton value="Logout" onClick={handleClick} />
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-300 hover:text-white">
                    Login
                  </Link>
                  <Link to="/signup" className="ml-6">
                    <CustomButton value="Signup" />
                  </Link>
                </>
              )}
            </div>
            <div className="-mr-2 flex md:hidden">
              <img
                className="w-6 h-6"
                src={menubar}
                alt="menu icon"
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            </div>
          </div>
        </div>

        {toggleMenu && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 sm:px-3 flex flex-col justify-between">
              {currentUser ? (
                <>
                  <Link to={"/slab"} className="text-gray-300 hover:text-white">
                    Create Slab
                  </Link>
                  <CustomButton value="Logout" onClick={handleClick} />
                </>
              ) : (
                <>
                  <Link to="/login" className="my-2">
                    <CustomButton value="Login" />
                  </Link>
                  <Link to="/signup">
                    <CustomButton value="Signup" className="my-2" />
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user,
});

export default connect(mapStateToProps, { removeUser })(Navbar);
