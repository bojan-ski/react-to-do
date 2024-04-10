import { useGlobalContext } from "../context"
import SectionTitle from "./SectionTitle"
import SingleToDo from "./SingleToDo"

const CompletedToDos = () => {
  const { toDoList, handleToDoCompleted, handleDeleteToDo } = useGlobalContext()

  return (
    <section className="to-do-list completed-list">
      <SectionTitle sectionTitle='Competed To Dos'/>

      <div className="todos">
        {toDoList.map(todo => {
          return (
            <>
                {todo.isCompleted && (<SingleToDo key={todo.id} todo={todo} />)}
            </>
        )
          // const { id, toDoTitle, toDoDescription, toDoDate, isCompleted } = todo

          // if (isCompleted) return <div key={id} className="todo">
          //   <div className="todo-section-1">
          //     <h4>
          //       {toDoTitle}
          //     </h4>
          //     {toDoDescription && (
          //       <p>
          //         {toDoDescription}
          //       </p>
          //     )}
          //     <p>
          //       <strong>Do date:</strong> {toDoDate}
          //     </p>
          //   </div>

          //   <div className="todo-section-2">
          //     <div className="complete">
          //       <label>To Do Completed:</label>
          //       <input type="checkbox" checked onChange={() => handleToDoCompleted(id)} />
          //     </div>

          //     <div className="btn-container">
          //       <button type='btn' onClick={() => handleDeleteToDo(id)}>
          //         Delete
          //       </button>
          //     </div>
          //   </div>
          // </div>
        })}
      </div>
    </section>
  )
}

export default CompletedToDos