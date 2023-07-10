
import React from 'react'
import { useState, useEffect, useRef } from 'react';


function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
    // useEffect(() => {
    //     inputRef.current.focus();
    // });
    useEffect(() => {
        inputRef.current.focus();
      }, []);
      

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handlesubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handlesubmit}>
            {props.edit ? (
                <>
                    <input
                        type='text'
                        placeholder='Update Your Item'
                        value={input}
                        name='text'
                        className='todo-input edit '
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button edit'>Update</button>
                </>
            ) : (
                <>
                    <input
                        type='text'
                        placeholder='Add a todo'
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />

                    <button className='todo-button'>Add todo</button>
                </>)}

        </form>

    );
}

export default TodoForm;