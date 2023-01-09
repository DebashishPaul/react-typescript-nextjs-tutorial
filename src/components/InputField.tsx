import React, { useRef } from 'react'

interface props{
    task: string,
    setTask: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent)=> void
}

const InputField : React.FC <props> = ({task, setTask, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      <form onSubmit={
        (e) => {handleAdd(e)
          inputRef.current?.focus()
        }}>
        <input value={task} ref={inputRef} onChange={(e) => setTask(e.target.value)} type="text" placeholder="write your task" />
        <button>Go</button>
      </form>
    </div>
  )
}

export default InputField
