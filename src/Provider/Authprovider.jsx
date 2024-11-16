import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase.init";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {   

  const [loading,setLoading]= useState(true)
  const auth = getAuth(app);

const logout = ()=>{
    signOut(auth)
    .then(()=>{
      console.log("log out succefulyy")
      
    })
    .catch(error=>{
      console.log("ERROR",error.message);
      
    })
}


  useEffect(() => {
   const unsuncribe =  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false);
    })
    return ()=>{
        unsuncribe()
    }
  }, []);
  const createNewuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
const updateUserprofile=(updatedData)=>{
  return updateProfile(auth.currentUser , updatedData)
}

  const loginwithpass= (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }

  const [user, setUser] = useState(null);
  console.log(user);

  const authinfo = {
    createNewuser,
    user,logout,
    setUser,
    loginwithpass,
    loading,updateUserprofile
  };

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
