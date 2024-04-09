import { useGlobalContext } from "../context"
import SingleToDo from "./SingleToDo"

const ActiveToDos = () => {
    const { toDoList, setToDoList, handleToDoCompleted, handleDeleteToDo } = useGlobalContext()

    // const handleToDoCompleted = (id) => {
    //     setToDoList(curToDos => curToDos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    //   }

    // const handleDeleteToDo = (id) => {
    //     const newToDoList = toDoList.filter(task => task.id !== id)
    //     setToDoList(newToDoList)
    // }

    return (
        <section className="to-do-list active-list">
            <h2 className="section-title">
                Active To Dos
            </h2>

            <div className="todos">
                {toDoList.map(todo => {                    
                    return (
                        <>
                            {!todo.isCompleted && (<SingleToDo todo={todo} />)}
                        </>
                    )
                    // const { id, toDoTitle, toDoDescription, toDoDate, isCompleted } = todo

                    // if (!isCompleted) return <div key={id} className="todo">
                    //     <div className="todo-section-1">
                    //         <h4>
                    //             {toDoTitle}
                    //         </h4>
                    //         {toDoDescription && (
                    //             <p>
                    //                 {toDoDescription}
                    //             </p>
                    //         )}
                    //         <p>
                    //             <strong>Do date:</strong> {toDoDate}
                    //         </p>
                    //     </div>

                    //     <div className="todo-section-2">
                    //         <div className="complete">
                    //             <label>To Do Completed:</label>
                    //             <input type="checkbox" onChange={() => handleToDoCompleted(id)} />
                    //         </div>

                    //         <div className="btn-container">
                    //             <button type='btn'>
                    //                 Edit
                    //             </button>

                    //             <button type='btn' onClick={() => handleDeleteToDo(id)}>
                    //                 Delete
                    //             </button>
                    //         </div>
                    //     </div>
                    // </div>
                })
                }
            </div>
        </section>
    )
}

export default ActiveToDos