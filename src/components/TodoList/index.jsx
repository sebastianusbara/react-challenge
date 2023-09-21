import './index.css'
import TodoInput from '../TodoInput'
import { useFetch } from '../../hooks/useTask'
import Swal from 'sweetalert2'

/**
 * TODO List
 */
export default function TodoList() {
  const { data, remove } = useFetch('http://localhost:3001/tasks')

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to recover this data",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((data) => {
      if (data.isConfirmed) {
        remove({ id })
      }
    })
  }

  const renderItem = ({ id, title }) => (
    <div key={id} className="task">
      <span>{title}</span>
      <button onClick={() => handleDelete(id)}>DELETE</button>
    </div>
  )

  return (
    <div className="todolist">
      <h1>TODO LIST</h1>
      <TodoInput />
      {data && data.map((item) => renderItem(item))}
    </div>
  )
}
