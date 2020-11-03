import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            isComplete: false
        })

        setInput('')
    }

    const handleInput = e => {
        setInput(e.target.value)
    }
    return (
        <form
            className='todo-form'
            onSubmit={handleSubmit}
        >
            {props.edit ? (
                <>
                    <input type='text'
                        placeholder='Update your item'
                        value={input}
                        className='todo-input'
                        onChange={handleInput}
                        ref={inputRef}
                    />
                    <button className='todo-button'>Update</button>
                </>
            ) :
                (
                    <>
                        <input type='text'
                            placeholder='What needs to be done?'
                            value={input}
                            className='todo-input'
                            onChange={handleInput}
                            ref={inputRef}
                        />
                        <button className='todo-button'>Add</button>
                    </>
                )
            }
        </form>
    )
}

export default TodoForm
