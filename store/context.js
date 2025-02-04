import { createContext,useState,useContext,useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const StoreContext = createContext();

export default StoreContext;

export const StoreProvider = ({ children }) => {
    
const value = {}
    
    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error("useAppContext must be used within a StoreProvider");
    }
    return context;
};

