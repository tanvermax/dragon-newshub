import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";

const Registration = () => {
  const { createNewuser,setUser,updateUserprofile } = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
const [error, setError]= useState({});
const navigate= useNavigate();
  const handleregister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length<3) {
      setError({ ...error, name:"must be more 3 cherecter"})
    }
    else{
      setError("")
    }
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photourl");
    console.log({ name, email, password, photo });
    createNewuser(email, password)
    .then((result) => {
      const user=  result.user;
      setUser(user);
      console.log(user);
      updateUserprofile({displayName:name, photoURL: photo})
      .then(()=>{
        navigate("/")
      })
      .catch(err=>{
        console.log("ERROR",err.message);
        
      })
      
    })
    .catch(error=>{
        console.log("ERROR",error.message);
        
    })

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 border border-gray-200 rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Register your account
        </h2>

        <form onSubmit={handleregister} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>
          {
            error.name && ( <label
              className="lebel text-rose-800 text-xs"
            
            >
             {error.name}
            </label>)
          }

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
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="photoUrl"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photoUrl"
              name="photourl"
              placeholder="Enter photo URL"
              className="w-fsdvvdsvull px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="text-gray-700">
              I accept the{" "}
              <Link to="/terms" className="text-blue-500 hover:underline">
                terms and conditions
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white ${
              isChecked
                ? "bg-gray-800 hover:bg-gray-900"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isChecked}
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
