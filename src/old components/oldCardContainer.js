import React, { useState } from 'react';
import { XIcon, DocumentTextIcon, LocationMarkerIcon, MailIcon } from '@heroicons/react/solid';


export default function CardContainer({ todos, completeTodo, removeTodo, updateTodo }) {
//key={index}
//
    return todos.map((todo,index) => (
        <div key={todo.as.toString()}>
            {console.log(todo,index)}
            <div className='flex justify-between bg-zinc-100 rounded-md h-fit p-2 shadow-lg'>
                <p>{todo.as},{todo.bs} ,{todo.as+todo.bs}, {index}</p>
                <XIcon className="h-10 w-10 text-stone-500 "
                />
            </div>
        </div>
    )
)}
//{todo.text}
//onClick={() => removeTodo(todo.id)}





