"use client"

//Task.jsx
import {ChevronRightIcon, TrashIcon} from "lucide-react" 
import { useRouter } from "next/navigation";
function Tasks({tasks, onTaskClick, onDeleteTaskClick}){
    //console.log(props); //Ver está funcionando
    
    //ADD
    const router = useRouter();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    
    // Navega para a página /task com os parâmetros de consulta
    router.push(`/taskpage?${query.toString()}`);
  }
    
    
    return(
        
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {tasks.map((task)=>(
                    <li key={task.id} className="flex gap-2">
                        <button 
                        onClick={()=>onTaskClick(task.id)}
                        className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}>
                        {task.title}
                     
                        </button>
                        <button 
                        onClick={()=>onSeeDetailsClick(task)}
                        className="bg-slate-400 p-2 rounded-md text-white"><ChevronRightIcon/></button>
                        <button 
                        onClick={()=> onDeleteTaskClick(task.id)}
                        className="bg-slate-400 p-2 rounded-md text-white"><TrashIcon/></button>
						</li>
                ))}

            </ul>
        
    );
}
export default Tasks;