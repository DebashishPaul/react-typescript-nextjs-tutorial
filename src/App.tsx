import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todos } from './model';

const App: React.FC = () =>  {
  const [task, setTask] = useState<string>("")
  const [todoList, setTodoList] = useState<Todos[]>([])

  const handleAdd = (e: React.FormEvent) : void => {
    e.preventDefault()
    setTodoList([...todoList, {id: Date.now(), name: task, isDone: false}])
    setTask("")
  }

  console.log(todoList, "tasks")
  return (
    <div>
      <span className='heading'>Taskify</span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
      {/* <br /> */}
      {
        todoList.map((e) => {
          return(<li>{e.name}</li>)
        })
      }
    </div>
  );
}

export default App;
