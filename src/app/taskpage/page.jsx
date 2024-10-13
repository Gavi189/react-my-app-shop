"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { ChevronLeftIcon } from "lucide-react";

// Componente que faz o uso de useSearchParams
function TaskDetails() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const titleParam = searchParams.get("title");
    const descriptionParam = searchParams.get("description");

    setTitle(titleParam || "Sem título");
    setDescription(descriptionParam || "Sem descrição");
  }, [searchParams]);

  return (
    <div className="w-[500px] mx-auto space-y-4">
      <div className="flex justify-center relative mb-6">
        <button
          onClick={() => router.push("/")}
          className="absolute left-0 top-0 bottom-0 text-slate-100"
        >
          <ChevronLeftIcon />
        </button>
        <h1>Detalhes da Tarefa</h1>
      </div>
      <div className="bg-slate-200 p-4 rounded-md">
        <h2 className="text-xl font-bold text-slate-600">{title}</h2>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}

// Uso do Suspense na renderização do componente
export default function TaskPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <TaskDetails />
    </Suspense>
  );
}
