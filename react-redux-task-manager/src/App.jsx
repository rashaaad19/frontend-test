import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import { ToastContainer } from "react-toastify";
import Filters from "./components/Filters";

function App() {
  return (
    <div className="py-10 px-4 ">
      <ToastContainer />
      <NewTaskForm />
      <Filters/>
      <TaskList />
    </div>
  );
}

export default App;
