import React from 'react'

const Todo = ({ id, title, description, complete, mongoId, deleteTodo, completeTodo }) => {
    return (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td className="px-6 py-4">{id + 1}</td>
            <td className={`px-6 py-4 ${complete ? 'line-through' : ''}`}>{title}</td>
            <td className={`px-6 py-4 ${complete ? 'line-through' : ''}`}>{description}</td>
            <td className="px-6 py-4">{complete ? 'Complted' : 'Pending'}</td>
            <td className="px-6 py-4 flex gap-1">
                <button onClick={() => deleteTodo(mongoId)} type="submit" className="bg-orange-600 p-3 text-white">Delete</button>
                {complete ? '' : <button onClick={() => completeTodo(mongoId)} type="submit" className="bg-green-600 p-3 text-white">Done</button>}
            </td>
        </tr>
    )
}

export default Todo