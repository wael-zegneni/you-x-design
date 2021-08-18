import axios from 'axios';
import {createContext, useState} from 'react';

export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) => {
    const [auth,setAuth]= useState({
        user : null,
        token : localStorage.getItem("token"),
        isAuthenticated: false,
        isLogginIn: false,
        error: null
      })

      const login = async (credentials) => {
          setAuth({isLogginIn: true})
        try {
            const res = await axios.post("/api/v1/auth/login", credentials)
            localStorage.setItem("token", res.data.token)
            setAuth({token : res.data.token, user : res.data.user, isAuthenticated: true, isLogginIn: false, error: null})
        } catch (error) {
            console.log(error)
            setAuth({error : error.response.data.message, isLogginIn: false, user: null, token: null, isAuthenticated: false})
        }
    }

    return(
    <AuthContext.Provider value ={{auth, login}}>
        {children}
    </AuthContext.Provider>

    )
}

export default AuthContextProvider;