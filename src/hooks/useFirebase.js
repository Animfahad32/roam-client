import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUsers] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    const signInUsingGoogle =() => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
  
    }

    useEffect(()=>{
        const unsubscribed =onAuthStateChanged(auth, (user)=>{
            if(user){
                setUsers(user)
            }else{
                setUsers({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    },[])


    const logOut = () => {
        signOut(auth)
        .then(()=>{ })
        .finally(()=> setIsLoading(false))
    }


    return {
        user,
        setUsers,
        setIsLoading,
        isLoading,
        signInUsingGoogle,
        logOut,
    }
}

export default useFirebase