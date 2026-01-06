import React,{useState} from 'react';
import './ToDoList.css'
function ToDoList(){
     const [tasks,setTasks]=useState([]);
  const [newTask,setNewTask]=useState("");
  function HandleInputChange(event){
setNewTask(event.target.value);
  }
  function AddTask(){
    if(newTask.trim()!==""){
        setTasks(t=>[...t,newTask]);
        setNewTask("");
    }
  }
  function DeleteTask(index){
    const UpdatedTasks = tasks.filter((_, i)=> i!== index);
    setTasks(UpdatedTasks);
  }
  function MoveTaskUp(index){
    if(index>0){
        const UpdatedTasks=[...tasks];
        [UpdatedTasks[index],UpdatedTasks[index-1]]=[UpdatedTasks[index-1],UpdatedTasks[index]];
        setTasks(UpdatedTasks);
    }
  }
  function MoveTaskDown(index){
     if(index<tasks.length-1){
        const UpdatedTasks=[...tasks];
        [UpdatedTasks[index],UpdatedTasks[index+1]]=[UpdatedTasks[index+1],UpdatedTasks[index]];
        setTasks(UpdatedTasks);
    }
  }

return(
<div className='to-do-list'>
    <h1>TO-Do-List</h1>

    <div>
        <input type='text' placeholder='What you want to do..!' value={newTask} onChange={HandleInputChange}></input>
        <button className='add-button' onClick={AddTask}>Add</button>
    </div>

    <ol>
        {tasks.map((task, index)=>
        <li key={index}>
            <span className="text">{task}</span>
            <button className='delete-button'onClick={()=>DeleteTask(index)}>Delete</button>
            <button className='move-button'onClick={()=>MoveTaskUp(index)}>👆</button>
            <button className='move-button'onClick={()=>MoveTaskDown(index)}>👇</button>
        </li>
        )}
    </ol>
</div>);
}
export default ToDoList