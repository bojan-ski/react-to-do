import { AppProvider } from "./context"
import Header from "./components/Header"
import ToDoForm from "./components/ToDoForm"
import ActiveToDos from "./components/ActiveToDos"
import CompletedToDos from "./components/CompletedToDos"

const App = () => {
  return (
    <AppProvider>
      <>
        <Header />
        <ToDoForm />
        
        <div className="container">
          <ActiveToDos />
          <CompletedToDos />
        </div>
      </>
    </AppProvider>
  )
}

export default App
