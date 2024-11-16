import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import SingleNavber from "./SingleNavber";
import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
const Navbar = () => {
  const { user,logout } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
    
        
        <p>{user && user.email}</p>
        
    
      <SingleNavber></SingleNavber>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          
          {
            user && user?.email ?(
              <div className="flex items-center gap-5">
                <img className="h-12 rounded-full" src={user?.photoURL} alt="" />
                <p className="font-bold">{user.displayName}</p>
              </div>
            ) : <img src={userIcon} alt="" />
          }
        </div>

        
        {
          user ? <button onClick={logout} className="btn btn-neutral rounded-none">
          Log out
        </button> : <Link to={"/auth/login"} className="btn btn-neutral rounded-none">
          Log in
        </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
