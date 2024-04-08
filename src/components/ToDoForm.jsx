import { useState } from "react";

const ToDoForm = () => {
    const [newToDo, setNewToDo] = useState({})
    const [toDoList, setToDoList] = useState([])

    const handleInput = (e) => {
        setNewToDo({...newToDo, [e.target.name]: e.target.value})
      }

    const handleSubmit = e => {
        e.preventDefault()

        setToDoList( curToDoList => [...curToDoList, newToDo])
        e.currentTarget.reset()
    }

    console.log(newToDo);
    console.log(toDoList);

    return (
        <section className="add-to-do">
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

                {/* to do description */}
                <div className="form-row">
                    <label htmlFor="toDoDescription" className="form-label">
                        To Do Description:
                    </label>
                    <input type="text" className="form-control" name="toDoDescription" id="toDoDescription" onInput={handleInput} />
                </div>

                {/* to do date */}
                <div className="form-row">
                    <label htmlFor="toDoDate" className="form-label">
                        To Do Date:
                    </label>
                    <input type="date" className="form-control" name="toDoDate" id="toDoDate" onInput={handleInput} />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </section>
    )
}

export default ToDoForm