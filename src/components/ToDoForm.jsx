import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { clearAllFields } from "../utils/clearFields";

const ToDoForm = () => {
    const { newToDo, setNewToDo, setToDoList, isEditToDo, updateToDoList } = useGlobalContext()
    const [showTextarea, setShowTextarea] = useState(false)

    useEffect(() => {
        if (isEditToDo.editToDo) {
            const { id, toDoTitle, toDoDescription, toDoDate, isCompleted } = isEditToDo.todo

            setNewToDo({
                id,
                toDoTitle,
                toDoDescription,
                toDoDate,
                isCompleted
            })
        }
    }, [isEditToDo])

    const editSelectedToDo = () => {
        updateToDoList(isEditToDo.todo.id, newToDo)
        setNewToDo({})
        clearAllFields()
        setShowTextarea(false)
    }

    const handleInput = (e) => {
        setNewToDo({ ...newToDo, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        const id = crypto.randomUUID()
        const isCompleted = false

        setToDoList(curToDoList => [...curToDoList, { id, ...newToDo, isCompleted }])
        setNewToDo({})
        clearAllFields()
        setShowTextarea(false)
    }

    return (
        <div className="add-to-do">
            <h2 className="section-title">
                Please add a new To Do
            </h2>

            <form className="form" onSubmit={handleSubmit}>
                {/* to do title */}
                <div className="form-row">
                    <label htmlFor="toDoTitle" className="form-label">
                        To Do Title:
                    </label>
                    <input type="text" className="form-control" name="toDoTitle" id="toDoTitle" value={newToDo.toDoTitle} onInput={handleInput} required />
                </div>

                {/* to do description option (show/hide feature) */}
                <div className="form-row">
                    <label htmlFor="toDoDescription" className="form-label">
                        Show To Do description textarea:
                    </label>
                    <button type="button" className="btn" onClick={() => setShowTextarea(!showTextarea)}>
                        {showTextarea ? "Hide" : "Show"}
                    </button>
                </div>

                {/* to do description */}
                <div className={`form-row ${showTextarea
                    ||
                    (isEditToDo.editToDo && isEditToDo?.todo?.toDoDescription?.length > 0) ? 'show' : ''}`}>
                    <label htmlFor="toDoDescription" className="form-label">
                        To Do Description:
                    </label>
                    <textarea className="form-control" name="toDoDescription" id="toDoDescription" value={newToDo.toDoDescription} onInput={handleInput} rows="10"/>
                </div>

                {/* to do date */}
                <div className="form-row">
                    <label htmlFor="toDoDate" className="form-label">
                        To Do Date:
                    </label>
                    <input type="date" className="form-control" name="toDoDate" id="toDoDate" value={newToDo.toDoDate} onInput={handleInput} required />
                </div>

                {!isEditToDo.editToDo ? (
                    <>
                        {/* add new to do - btn */}
                        < button type="submit" className="btn submit-btn">
                            Add New To Do
                        </button>
                    </>
                )
                    :
                    (
                        <>
                            {/* edit selected to do data - btn */}
                            <button type="button" className="btn update-btn" onClick={editSelectedToDo}>
                                Update To Do
                            </button>
                        </>
                    )
                }
            </form>
        </div >
    )
}

export default ToDoForm