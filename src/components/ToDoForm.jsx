import { useState } from "react";
import { useGlobalContext } from "../context";

const ToDoForm = () => {
    const { newToDo, setNewToDo, setToDoList } = useGlobalContext()
    const [showTextarea, setShowTextarea] = useState(false)

    const handleInput = (e) => {
        setNewToDo({ ...newToDo, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const id = crypto.randomUUID()
        const isCompleted = false

        setToDoList(curToDoList => [...curToDoList, { id, ...newToDo, isCompleted }])
        setNewToDo({})
        e.currentTarget.reset()
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
                    <input type="text" className="form-control" name="toDoTitle" id="toDoTitle" onInput={handleInput} required />
                </div>

                {/* to do description option (show/hide) */}
                <div className="form-row">
                    <label htmlFor="toDoDescription" className="form-label">
                        Show To Do description textarea:
                    </label>
                    <button type="button" className="btn" onClick={() => setShowTextarea(!showTextarea)}>
                        {showTextarea ? "Hide" : "Show"}                        
                    </button>
                </div>

                {/* to do description */}
                <div className={showTextarea ? 'form-row show' : 'form-row'}>
                    <label htmlFor="toDoDescription" className="form-label">
                        To Do Description:
                    </label>
                    <textarea className="form-control" name="toDoDescription" id="toDoDescription" onInput={handleInput} rows="10"></textarea>
                </div>
                {/* <div className="form-row">
                    <label htmlFor="toDoDescription" className="form-label">
                        To Do Description:
                    </label>
                    <input type="text" className="form-control" name="toDoDescription" id="toDoDescription" onInput={handleInput} />
                </div> */}

                {/* to do date */}
                <div className="form-row">
                    <label htmlFor="toDoDate" className="form-label">
                        To Do Date:
                    </label>
                    <input type="date" className="form-control" name="toDoDate" id="toDoDate" onInput={handleInput} required />
                </div>

                {/* submit btn */}
                <button type="submit" className="btn">
                    Add New To Do
                </button>
            </form>
        </div>
    )
}

export default ToDoForm