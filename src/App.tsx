import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoListView from './components/TodoListView';
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
    <div style={{backgroundColor: "#660033"}}>
      <span className='heading'>Taskify</span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
      <TodoListView todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
