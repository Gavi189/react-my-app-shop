"use client";

import Image from "next/image";
import children from "@/assets/children.png";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { ChevronLeftIcon } from "lucide-react";

// Componente que faz o uso de useSearchParams
function TaskDetails() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [nomeBrincadeira, setNomeBrincadeira] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const nomeParam = searchParams.get("nome");
    const valorParam = searchParams.get("valor");
    const nomeBrincadeiraParam = searchParams.get("nomeBrincadeira");

    setNome(nomeParam || "Sem nome");
    setValor(valorParam || "Sem valor");
    setNomeBrincadeira(nomeBrincadeiraParam || "Sem brincadeira");
  }, [searchParams]);

  return (
    <div className="relative w-full min-h-screen bg-slate-500 flex justify-center items-center p-4 md:p-6">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src={children}
          alt="children"
          layout="fill" 
          objectFit="cover" 
          quality={100}
        />
      </div>

      {/* Container dos detalhes */}
      <div className="relative z-10 w-full max-w-md bg-red-100 p-6 rounded-md shadow-md space-y-4">
        {/* Botão voltar */}
        <div className="flex items-center mb-4">
          <button
            onClick={() => router.push("/")}
            className="text-slate-100 bg-rose-500 p-2 rounded-md"
          >
            <ChevronLeftIcon size={24} />
          </button>
          <h1 className="ml-4 text-2xl font-bold text-rose-800">Dados do Cliente</h1>
        </div>

        {/* Detalhes da Tarefa */}
        <div className="bg-orange-200 p-4 rounded-md space-y-2">
          <h2 className="text-xl font-bold text-green-700">Nome: {nome}</h2>
          <p className="text-red-600">Valor: {valor}</p>
          <p className="text-blue-600">Brincadeira: {nomeBrincadeira}</p>
        </div>
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
