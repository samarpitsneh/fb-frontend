
import { createContext,useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currUser,setCurrUser] =useState(
        JSON.parse(localStorage.getItem("user"))||null
    );
        const login = () => {
            setCurrUser(
                {
                    id:1,
                    name:"Sneh",
                    profilePic: "https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }
            );
        };

    useEffect(() =>{
        localStorage.setItem("user",JSON.stringify(currUser));
    },[currUser]);

    return(
        <AuthContext.Provider value={{ currUser, login}}>
            {children}
        </AuthContext.Provider>
    );
};




