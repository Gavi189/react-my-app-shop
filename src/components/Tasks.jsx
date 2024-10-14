"use client"

// Task.jsx
import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";

function Tasks({ tasks, onDeleteTaskClick }) {
  const router = useRouter();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("nome", task.nome);
    query.set("valor", task.valor);
    query.set("nomeBrincadeira", task.nomeBrincadeira);
    
    // Navega para a página /taskpage com os parâmetros de consulta
    router.push(`/taskpage?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-rose-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button 
            className="bg-pink-400 text-left w-full text-white p-2 rounded-md">
            {task.nome}
          </button>
          <button 
            onClick={() => onSeeDetailsClick(task)}
            className="bg-pink-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <button 
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-pink-400 p-2 rounded-md text-white">
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
