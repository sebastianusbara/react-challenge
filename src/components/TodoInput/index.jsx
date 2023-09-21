import React, { useState } from 'react'
import './index.css'
import { useFetch } from '../../hooks/useTask'

export const TodoInput = () => {
  const [input, setInput] = useState()
  const { add } = useFetch('http://localhost:3001/tasks')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <React.Fragment>
      <input className="inputTask" onChange={handleChange} />
      <button
        className="addButton"
        onClick={() =>
          add({
            title: input,
          })
        }
      >
        Add
      </button>
    </React.Fragment>
  )
}

export default TodoInput
