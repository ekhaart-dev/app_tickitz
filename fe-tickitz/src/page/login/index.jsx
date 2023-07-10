import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useApi from "../../helpers/useApi";
import { Show } from "../../helpers/toast";
import { login } from "../../store/reducer/user";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [form, setForm] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const api = useApi();

  const { isAuth } = useSelector((s) => s.users);
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const inputChange = (e) => {
    const data = { ...form };
    data[e.target.name] = e.target.value;
    setForm(data);
  };

  const goLogin = () => {
    api({
      method: "POST",
      url: "/auth",
      data: form,
    })
      .then(({ data }) => {
        const token = data.token;
        dispatch(login(token));
      })
      .catch((err) => {
        const axiosErr = err.response.data;
        if (axiosErr.message !== undefined) {
          Show(axiosErr.message, "warning");
        } else if (axiosErr.error !== undefined) {
          Show(axiosErr.error, "error");
        }
      });
  };
  return (
    <>
      {/* Desktop Login Start */}
      <div className="w-full flex justify-between gap-7 p-10">
        <div className="h-screen flex justify-start sidebar-login"></div>
        <div className="flex flex-col justify-center px-3">
          <div className="">
            <h1 className="lg:text-4xl md:text-3xl font-bold mb-3">Sign In</h1>
            <p className="text-gray-400">
              Sign in with your data that you entered during your registration
            </p>
            <div className="form-control w-full max-w-lg mt-10">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Write your email"
                className="input input-bordered w-full max-w-lg"
                onChange={inputChange}
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Write your password"
                className="input input-bordered w-full max-w-lg"
                onChange={inputChange}
              />
            </div>
            <div className="bottom mt-10 text-center">
              <button
                className="btn btn-block btn-primary text-white"
                onClick={goLogin}
              >
                Sign In
              </button>
              <div className="mt-4 text-sm">
                Forgot your password ?{" "}
                <Link to="/" className="text-primary underline">
                  Reset Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
