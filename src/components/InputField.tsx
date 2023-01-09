import React from 'react'

interface props{
    task: string,
    setTask: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent)=> void
}

const InputField : React.FC <props> = ({task, setTask, handleAdd}) => {
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="write your task" />
        <button>Go</button>
      </form>
    </div>
  )
}

export default InputField
