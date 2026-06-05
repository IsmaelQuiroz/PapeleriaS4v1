import React, { createContext, useReducer,useContext} from 'react'

//en este contexto se va almacenar el estado incial
export const MyStateContext = createContext();

export const  MyStateProvider = ({reducerParam, initialStateParam, children}) => (
    <MyStateContext.Provider value={useReducer(reducerParam, initialStateParam)}>
        {children}
    </MyStateContext.Provider>
);

export const useStatateValueMy = () => useContext(MyStateContext);