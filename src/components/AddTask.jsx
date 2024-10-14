import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [nomeBrincadeira, setNomeBrincadeira] = useState("");

  return (
    <div className="space-y-4 p-6 bg-green-500 rounded-md shadow flex flex-col">
      <p>Nome:</p>
      <input
        type="text"
        placeholder="Digite seu nome"
        className="border bg-red-400 border-white-300 outline-red-400 px-4 py-2 rounded-md placeholder-white text-white"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />

      <p>Valor:</p>
      <input
        type="text"
        placeholder="Digite o valor até 10 reais"
        className="border bg-blue-400 border-white-300 outline-blue-400 px-4 py-2 rounded-md placeholder-white text-white"
        value={valor}
        onChange={(event) => setValor(event.target.value)}
      />

      <p>Brincadeira:</p>
      <input
        type="text"
        placeholder="Digite o nome da brincadeira"
        className="border bg-yellow-400 border-white-300 outline-yellow-400 px-4 py-2 rounded-md placeholder-white text-white"
        value={nomeBrincadeira}
        onChange={(event) => setNomeBrincadeira(event.target.value)}
      />

      <p></p>
      <button
        className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          // Verificar se todos os campos estão preenchidos
          if (!nome.trim() || !valor.trim() || !nomeBrincadeira.trim()) {
            return alert("Preencha o nome, valor e a brincadeira do Dia das Crianças.");
          }
          onAddTaskSubmit(nome, valor, nomeBrincadeira);
          setNome("");
          setValor("");
          setNomeBrincadeira("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
