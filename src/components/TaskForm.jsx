import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") return; //para que no se cree nada si el input esta vacío
    createTask({ title: title, description: description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-6 mb-4">
      <h1 className="mb-3 text-2xl text-white">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 p-1 w-full mb-3"

        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-1 w-full mb-3"
        ></textarea>
        <div className="text-right"><button className="bg-indigo-500 px-2 py-1 text-white">Guardar</button></div>
      
      </form>
    </div>
  );
}
