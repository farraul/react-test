import { createContext } from "react";
import { auth } from "../services/firebase"


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const data= {auth}
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}


export default AuthContext;