import React,{createContext,useContext,useReducer} from "react";
import reportWebVitals from "./reportWebVitals";

// Prepare the datalayer
export const StateContext = createContext();

// Wrap our app and provide the Data Layer
export const StateProvider = ({reducer, initialState,children})=>(
<StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
</StateContext.Provider>

);

export const useStateValue = () => useContext(StateContext);
