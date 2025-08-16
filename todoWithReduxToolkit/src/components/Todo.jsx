import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [editingId, setEditingId] = useState(null)
    const [editedText, setEditedText] = useState("")

    const handleUpdate = (todo) => {
        if (editingId === todo.id) {
            if (editedText.trim() !== "") {
                dispatch(updateTodo({ id: todo.id, text: editedText }))
            }
            setEditingId(null)
        } else {
            setEditingId(todo.id)
            setEditedText(todo.text)
        }
    }

    const handleKeyDown = (e, todo) => {
        if (e.key === 'Enter') {
            handleUpdate(todo)
        } else if (e.key === 'Escape') {
            setEditingId(null)
        }
    }

  return (
    <>
        <div>Todos</div>
        <ul className="list-none">
            {todos.map((todo) => (
            <li
                key={todo.id}
                className="mt-4 flex justify-between items-center bg-zinc-900 px-4 py-3 rounded-lg border border-zinc-700/50 shadow-lg transition-all duration-300 hover:border-zinc-600"
            >
                <div className='text-gray-100 flex-1'>
                    {editingId === todo.id ? (
                        <input
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, todo)}
                            className="w-full bg-zinc-800 text-gray-100 px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-zinc-700 transition-all duration-200"
                            autoFocus
                        />
                    ) : (
                        <span className="py-1.5 px-1">{todo.text}</span>
                    )}
                </div>
                <div className="flex gap-3">
                    <button
                    onClick={() => handleUpdate(todo)}
                    className="text-white bg-blue-600 border-0 py-1.5 px-4 focus:outline-none hover:bg-blue-700 rounded-md text-md transition-colors duration-200 focus:ring-2 focus:ring-blue-500/50 shadow-sm"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                    </svg>
                    </button>
                    <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-600 border-0 py-1.5 px-4 focus:outline-none hover:bg-red-700 rounded-md text-md transition-colors duration-200 focus:ring-2 focus:ring-red-500/50 shadow-sm"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                    </button>
                </div>
            </li>
            ))}
        </ul>
    </>
  )
}

export default Todos