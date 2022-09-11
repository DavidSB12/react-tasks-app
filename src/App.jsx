import reactLogo from "./assets/react.svg";
import "./App.css";
import { TaskList } from "./components/TaskList.jsx";
import { TaskForm } from "./components/TaskForm.jsx";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto pt-10">
        <TaskForm></TaskForm>
        <TaskList></TaskList>
      </div>
    </main>
  );
}

export default App;
