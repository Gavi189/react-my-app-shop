"use client";

import Tasks from "@/components/Tasks";
import AddTask from "@/components/AddTask";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import Image from "next/image";
import children from "@/assets/children.png"

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Verifique se está no lado do cliente
    if (typeof window !== "undefined") {
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Salve as tarefas no localStorage sempre que elas forem atualizadas
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(nome, valor, nomeBrincadeira) {
    const newTask = {
      id: v4(),
      nome: nome,
      valor: valor,
      nomeBrincadeira: nomeBrincadeira,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center items-center p-6 relative">
      <div className="absolute inset-0 opacity-30">
        <Image
          src={children}
          alt="children"
          layout="fill" // Isso garante que a imagem preencha todo o container
          objectFit="cover" // A imagem será redimensionada para cobrir a tela
          quality={100} // Mantém uma boa qualidade da imagem
        />
      </div>
      <div className="w-[500px] space-y-4 relative z-10">
        <h1 className="text-5xl text-slate-100 font-bold text-center">Dia das Crianças</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks}  onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default Home;
