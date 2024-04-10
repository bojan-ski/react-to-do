import { useGlobalContext } from "../context"
import SectionTitle from "./SectionTitle"
import SingleToDo from "./SingleToDo"

const CompletedToDos = () => {
  const { toDoList } = useGlobalContext()

  return (
    <section className="to-do-list completed-list">
      <SectionTitle sectionTitle='Competed To Dos' />

      <div className="todos">
        {toDoList.map(todo => {
          return (
            <>
              {todo.isCompleted && (<SingleToDo key={todo.id} todo={todo} />)}
            </>
          )
        })
        }
      </div>
    </section>
  )
}

export default CompletedToDos