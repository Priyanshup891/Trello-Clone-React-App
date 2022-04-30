import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { XIcon, DocumentTextIcon, LocationMarkerIcon, MailIcon } from '@heroicons/react/solid';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

//  if (edit.id) {
//    return (<>
//      <h1>ciao,{edit.id}</h1>
//      <TodoForm edit={edit} onSubmit={submitUpdate} />
//    </>)}

//{!edit.id && (todo.id!==edit.id) ? todo.text : <TodoForm edit={edit} onSubmit={submitUpdate} />}
  return todos.map((todo, index) => (
    <div className='flex py-5' key={index}>
        <div  className={todo.isComplete 
            ? 'bg-zinc-300 flex justify-between w-full p-5 text-zinc-500' 
            : ' flex justify-between w-full p-5 '}
            onClick={() => completeTodo(todo.id)}
            key={index}>

            <div className='w-full text-left flex m-auto align-middle'> {todo.id!=edit.id 
            ? <div className='px-1'>{todo.text}</div>
            : <TodoForm edit={edit} onSubmit={submitUpdate}/>}
            </div>
        </div>
        <div className=' p-5'>
          <XIcon
              className="h-10 w-10 text-blue-500 "
              onClick={() => removeTodo(todo.id)}
            
          />
          <DocumentTextIcon
            onClick={() => setEdit({ id: todo.id, value: todo.text})}
            className='h-10 w-10 text-blue-500'
          />
        </div>
    </div>
  ));
};

export default Todo;