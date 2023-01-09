import React from 'react'
import { Todos } from '../model'

interface Props {
    todoList : Todos[],
    setTodoList : React.Dispatch<React.SetStateAction<Todos[]>>
}

const TodoListView:React.FC<Props> = ({todoList, setTodoList}: Props) => {
  return (
    <div style={{color : "white"}}>
      {
        todoList.map((e:any) => {
          return(<li>{e.name}</li>)
        })
      }
    </div>
  )
}

export default TodoListView
