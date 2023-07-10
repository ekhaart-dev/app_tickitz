import React, { useEffect, useState } from "react";
import logo from "../assets/img/tickitz-head.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/reducer/user";

function Header() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((s) => s.users);

  return (
    <>
      {/* Desktop Navbar Start */}
      <nav className="hidden lg:w-full lg:flex lg:px-20 lg:py-5 lg:gap-3 lg:justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex">
            <img src={logo} alt="" />
          </Link>
          <div className="flex gap-3 mx-10">
            <Link to="/" className="flex">
              Home
            </Link>
            <Link to="/list_movie" className="flex">
              List Movie
            </Link>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          {isAuth ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://res.cloudinary.com/dpn40glt3/image/upload/v1688424374/app_tickitz/img/fp_tt7eph.png"
                    alt="Avatar"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Link
                    to="#"
                    className="justify-between"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="hidden lg:flex lg:justify-end">
              <Link
                to="/login"
                className="text-sm inline-block rounded-md border border-transparent bg-primary px-8 py-3 text-center text-white hover:bg-indigo-700"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
      {/* Desktop Navbar End */}
      {/* Mobile Navbar Start */}
      <nav className="w-full px-5 py-3 flex items-center justify-between lg:hidden">
        <div className="flex">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/list_movie">List Movie</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/4 flex">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="flex">
          {isAuth ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://res.cloudinary.com/dpn40glt3/image/upload/v1688424374/app_tickitz/img/fp_tt7eph.png"
                    alt="Avatar"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className=" lg:flex lg:justify-end">
              <Link
                to="/login"
                className="text-sm inline-block rounded-md border border-transparent bg-primary px-8 py-3 text-center text-white hover:bg-indigo-700"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
