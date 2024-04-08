import { AppProvider } from "./context"
import Header from "./components/Header"
import ToDoForm from "./components/ToDoForm"

const App = () => {
  return (
    <AppProvider>
      <>
        <Header />
        <ToDoForm />

        <div className="container">
          content
        </div>
      </>
    </AppProvider>
  )
}

export default App
