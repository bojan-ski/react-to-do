import { useGlobalContext } from "../context"
import SectionTitle from "./SectionTitle"
import SingleToDo from "./SingleToDo"

const ActiveToDos = () => {
    const { toDoList } = useGlobalContext()

    return (
        <section className="to-do-list active-list">
            <SectionTitle sectionTitle='Active To Dos'/>

            <div className="todos">
                {toDoList.map(todo => {                    
                    return (
                        <>
                            {!todo.isCompleted && (<SingleToDo key={todo.id} todo={todo} />)}
                        </>
                    )
                })
                }
            </div>
        </section>
    )
}

export default ActiveToDos