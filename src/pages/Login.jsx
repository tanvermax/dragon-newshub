import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";

const Login = () => {
  const { loginwithpass, setUser } = useContext(AuthContext);
const [error, setError] = useState({});

  const location = useLocation();
  console.log(location);
  
  const navigate= useNavigate(); 

  const loginwithemailpass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginwithpass(email, password)
      .then((result) => {
        const userr = result.user;
        setUser(userr);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log("ERROR", error.message);
        setError({...err,login:err.code})
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 border  rounded-md ">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login your account
        </h2>

        <form onSubmit={loginwithemailpass} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>
          <p className="text-left text-xs mt-4 text-gray-600">
          Forget {" "}
          <Link
            to="/auth/register"
            className="text-red-500 font-semibold  hover:underline"
          >
            Passsword?
          </Link>
        </p>
        {
          error.login && (<label className="label text-red-500 ">{error.login}</label>)
        }


          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900"
          >
            Login
          </button>
        </form>
        
        <p className="text-center mt-4 text-gray-600">
          Don’t Have An Account?{" "}
          <Link
            to="/auth/register"
            className="text-red-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
