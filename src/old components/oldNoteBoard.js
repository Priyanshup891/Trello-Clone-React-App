import { useState, useEffect, useRef } from 'react';
import { XIcon, PlusIcon } from '@heroicons/react/solid';
import NotePanel from './NotePanel'
import NewNotePanel from './NewNotePanel';
import CardContainer from './CardContainer';

export default function NoteBoard() {
    const [lista,setLista] = useState(null);
    const [todos, setTodos] = useState([{as:'ciao',bs:'err'}, {as:'test'}, {as:'map', bs:['poi','uyt','rew']}]);
    
    
    //definisci sta roba
   // const addTodo = todo => {
      function addTodo (todo){
        if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
        }
    
        const newTodos = [todo, ...todos];
    
        setTodos(newTodos);
        console.log(...todos);
      };


//completeTodo={completeTodo}updateTodo={updateTodo}removeTodo={removeTodo}
//{lista && lista.map((lista)=><NotePanel key={lista.id} title={lista.title}/>)}
    return (
      <div className='flex gap-x-3 overflow-x-auto h-full p-10'>
          
          <NewNotePanel todos={todos} addtodo={addTodo}/> 
          <div className='flex flex-col bg-zinc-200 p-2 rounded-md h-fit w-[272px] gap-y-2 flex-shrink-0'>
            <h2 className='font-semibold font-xl pb-1 px-2'>lista exp</h2>
            <CardContainer todos={todos} />
            <div className='flex '>
               <PlusIcon className='w-5 h-5 my-auto'/>
                <h3 className=''>Add a card 3x</h3> 
            </div>
          </div>
        
      </div>
    );}