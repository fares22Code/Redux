import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./components/addtask/AddTask";
import ListTask from "./components/listtask/ListTask";
import Task from "./components/task/Task";
import "./App.css"

function App() {
  return (
   <div className="todoapp">
  <AddTask />
  <br></br>
   <ListTask />
   <br></br>
    <Task  globalList />
   </div>
   
   
  );
}

export default App;
