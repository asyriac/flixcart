import { createContext, useContext, useEffect, useReducer } from "react";
import { useState } from "react";
import {authReducer, initialState} from '../reducers/auth-reducer'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state,dispatch] = useReducer(authReducer,initialState)

  

  const loginUserWithCredentials = (username, password) => {
    if(username === "admin" && password === "password") {
      dispatch({type:"LOG_IN"})
    }
  }

  const logoutUser = () => {
    dispatch({type:"LOG_OUT"})
  }

  return (
    <AuthContext.Provider value={{ ...state, loginUserWithCredentials,logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};


export { AuthProvider, useAuth };