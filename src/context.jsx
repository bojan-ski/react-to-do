import { createContext, useContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [newToDo, setNewToDo] = useState({})
    const [toDoList, setToDoList] = useState([])
    const [isEditToDo, setIsEditToDo] = useState({
        todo: {},
        edit: false
    })

    // mark a "to do" as completed
    const handleToDoCompleted = (id) => {
        setToDoList(curToDos => curToDos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    }

    // edit a "to do"
    const handleEditToDo = (todo) => {
        setIsEditToDo({
            todo,
            editToDo: true
        })
    }    

    const updateToDoList = (id, updatedToDo) => {
        setToDoList(toDoList.map(todo => (todo.id === id ? {...todo, ...updatedToDo} : todo)))
        setIsEditToDo({
            todo: {},
            edit: false
        })
    }

    // delete a "to do"
    const handleDeleteToDo = (id) => {
        const newToDoList = toDoList.filter(task => task.id !== id)
        setToDoList(newToDoList)
    }

    return <AppContext.Provider value={{ newToDo, setNewToDo, toDoList, setToDoList, isEditToDo, handleToDoCompleted, handleEditToDo, updateToDoList, handleDeleteToDo }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)