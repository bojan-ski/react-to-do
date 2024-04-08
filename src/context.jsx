import { createContext, useContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [newToDo, setNewToDo] = useState({})
    const [toDoList, setToDoList] = useState([])

    // console.log(newToDo);
    console.log(toDoList);

    return <AppContext.Provider value={{newToDo, setNewToDo, toDoList, setToDoList}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)