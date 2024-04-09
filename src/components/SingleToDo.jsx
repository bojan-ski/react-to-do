import { useGlobalContext } from "../context"

const SingleToDo = ({ todo }) => {
    const { id, toDoTitle, toDoDescription, toDoDate, isCompleted } = todo
    const { handleToDoCompleted, handleDeleteToDo } = useGlobalContext()
    // console.log(isCompleted);

    return (
        <>
            <div key={id} className="todo">
                <div className="todo-section-1">
                    <h4>
                        {toDoTitle}
                    </h4>
                    {toDoDescription && (
                        <p>
                            {toDoDescription}
                        </p>
                    )}
                    <p>
                        <strong>Do date:</strong> {toDoDate}
                    </p>
                </div>
                <div />
                {!isCompleted ? (
                    <div className="todo-section-2">
                        <div className="complete">
                            <label>To Do Completed:</label>
                            <input type="checkbox" onChange={() => handleToDoCompleted(id)} />
                        </div>

                        <div className="btn-container">
                            <button type='btn'>
                                Edit
                            </button>

                            <button type='btn' onClick={() => handleDeleteToDo(id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                )
                    :
                    (
                        <div className="todo-section-2">
                            <div className="complete">
                                <label>To Do Completed:</label>
                                <input type="checkbox" checked onChange={() => handleToDoCompleted(id)} />
                            </div>

                            <div className="btn-container">
                                <button type='btn' onClick={() => handleDeleteToDo(id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default SingleToDo