import { createContext, useContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [newToDo, setNewToDo] = useState({})
    const [toDoList, setToDoList] = useState([])
    // console.log(newToDo);
    console.log(toDoList);

    const handleToDoCompleted = (id) => {
        setToDoList(curToDos => curToDos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
      }

    const handleDeleteToDo = (id) => {
        const newToDoList = toDoList.filter(task => task.id !== id)
        setToDoList(newToDoList)
    }

    return <AppContext.Provider value={{newToDo, setNewToDo, toDoList, setToDoList, handleToDoCompleted, handleDeleteToDo}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)