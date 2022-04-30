import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };
  

  return (
    <form onSubmit={handleSubmit} className='w-full flex justify-between'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='w-full m-1 rounded-md'
          />
          <button onClick={handleSubmit} className=' bg-zinc-500 p-5 ml-10 text-zinc-900 rounded-md hover:shadow-md'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='w-full m-1 px-5 rounded-md'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='p-2 my-1 ml-10 w-1/4 bg-zinc-500 rounded-md hover:shadow-md'>
            Add To Do
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;