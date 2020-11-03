import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        console.log(value)
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo) =>
        (<div key={todo.id}
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        >
            <div
                onClick={() => completeTodo(todo.id)}>{todo.text}
            </div>
            {/* <div style={style} key={todo.id} onClick={() => console.log('Div-text')} >{todo.text}</div> */}
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    // onClick={() => console.log('Close-btn')}
                    className="delete-icon"
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                />
            </div>
        </div>
        ));

}

export default Todo


