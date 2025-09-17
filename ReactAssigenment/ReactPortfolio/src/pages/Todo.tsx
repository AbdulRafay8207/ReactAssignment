import { useState, type ChangeEvent, type FormEvent } from 'react'
// import './todo.css'

// const todos = [
  // {
  //   id: '01',
  //   title: 'todo 1',
  //   isCompleted: false,
  // },
// ]

const Todo = () => {
  const [todos, setTodos] = useState([  
    {
    id: '01',
    title: 'go to gym',
    isCompleted: false,
  },
  {
    id: '01',
    title: 'To finish React Assignments',
    isCompleted: false,
  },
  {
    id: '01',
    title: 'purchase groceries',
    isCompleted: false,
  }
  ])
  const [newTask, setNewTask] = useState('')

  const handleNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!newTask.trim()) {
      alert('input can not be empty')
      return
    }
    setTodos([{id:todos.length + 1,title:newTask,isCompleted:false}, ...todos])
    setNewTask('')
  }

  const handleDeleteTodo = (text: string) => {
    const delTodo = todos.filter((todo) => todo.title !== text)
    setTodos(delTodo)
  }

  return (
    <div>
      <form action="" className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="todo">What you want to do?</label>
        <input
          type="text"
          value={newTask}
          onChange={handleNewTask}
          id="todo"
          placeholder="type your todo"
        />
        <button type="submit">Submit</button>
      </form>

      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.title}{' '}
              <button onClick={() => handleDeleteTodo(todo.title)}>Delete</button>
              <button >Edit</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You don't have any todo</p>
      )}
    </div>
  )
}

export default Todo