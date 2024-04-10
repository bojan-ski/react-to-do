import { AppProvider } from "./context"
import Header from "./components/Header"
import ToDoForm from "./components/ToDoForm"
import ActiveToDos from "./components/ActiveToDos"
import CompletedToDos from "./components/CompletedToDos"
import Footer from "./components/Footer"

const App = () => {
  return (
    <AppProvider>
      <>
        <Header />

        <main>
          <ToDoForm />
          
          <div className="container">
            <ActiveToDos />
            <CompletedToDos />
          </div>
        </main>

        <Footer/>
      </>
    </AppProvider>
  )
}

export default App
