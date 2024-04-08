import { useGlobalContext } from "../context"

const ActiveToDos = () => {
    const { toDoList } = useGlobalContext()
    // console.log(toDoList);

    return (
        <section className="to-do-list active-list">
            <h2 className="section-title">
                Active To Dos
            </h2>

            <div className="todos">
                {toDoList.map(todo => {
                    // console.log(todo);
                    const { id, toDoTitle, toDoDescription, toDoDate } = todo

                    return <div key={id} className="todo">
                        <div className="todo-section-1">
                            <h4>
                                {toDoTitle}
                            </h4>
                            <p>
                                {toDoDescription}
                            </p>
                            <p>
                                <strong>Do date:</strong> {toDoDate}
                            </p>
                        </div>

                        <div className="todo-section-2">
                            <div className="complete">
                                <label>To Do Completed:</label>
                                <input type="checkbox" />
                            </div>

                            <div className="btn-container">
                                <button type='btn'>
                                    Edit
                                </button>

                                <button type='btn'>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default ActiveToDos