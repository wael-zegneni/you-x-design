import axios from 'axios';
import {createContext, useState} from 'react';
import setHeaderToken from '../utils/setTokenHeader';

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
              console.log(auth)
            } catch (error) {
                console.log(error)
                setAuth({error : error.response.data.message, isLogginIn: false, user: null, token: null, isAuthenticated: false})
            }
        }
        // const reloadUser = async() => {
        //     try {
        //         await loadUser()
        //         const res = axios.get(`/api/v1/user?id=${auth.user._id}`)
        //         setAuth({...auth, user: res.data})
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        const reloadUser = async (id)=>{
            try {
                const res = await axios.get(`/api/v1/user?id=${id}`)
                setAuth({...auth, user: res.data})
            } catch (error) {
                console.log(error)
            }
            
        }
        const loadUser = async () => {
            setHeaderToken();
            setAuth({isLogginIn: true})
            try {
                const res = await axios.get("/api/v1/auth/user")
                setAuth({...auth, user : res.data, isAuthenticated: true, isLogginIn: false, error: null})
            } catch (error) {
                console.log(error)
                setAuth({error : error.response.data.message, isLogginIn: false, user: null, token: null, isAuthenticated: false})
        }
    } 
    const signout = () => {
        localStorage.removeItem("token")
        setAuth({
            user : null,
            token : null,
            isAuthenticated: false,
            isLogginIn: false,
            error: null
        })
        
    }

    return(
    <AuthContext.Provider value ={{auth, login, loadUser, signout, reloadUser}}>
        {children}
    </AuthContext.Provider>

    )
}

export default AuthContextProvider;