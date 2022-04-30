import { useState, useEffect, useRef } from 'react';
import { XIcon, PlusIcon } from '@heroicons/react/solid';

export default function NoteBoard() {
  const[AddAnotherList,setAddAnotherList]=useState(true);
  const[newtitle, setNewTitle] = useState();
  const[newcardtitle, setNewCardTitle] = useState();
  const[submittedtitle, setSubmittedTitle] = useState(false);
  const[submittedcardtitle, setSubmittedCardTitle] = useState(true);
  const[input, setInput] = useState();
  const[todos, setTodos] = useState([]);
  //'todos1','todos2','todos3'
  //([{as:'ciao',bs:'err'}, {as:'test'}, {as:'map', bs:['poi','uyt','rew']}]);
    
  const handleChange = (e) => {
      e.preventDefault();
      setInput(e.target.value);
      //setneettitlef
      };
      
  function handleSubmit(){
      //e.preventDefault();
      setNewCardTitle(input);
      console.log(input);
      //si rompe qua newcardtitle
      addTodo(newcardtitle);
      console.log('after addtodo in handle submit -newcardtitle-');
      setSubmittedCardTitle(!submittedcardtitle)
      };

      function addTodo(todo) {
        //console.log('ciao addtodo function');
        //console.log(todo);
        //if (!todo.text || /^\s*$/.test(todo.text)) {
        //  return;}
        if (!todo) return;
        const newTodos = [...todos, todo.toString() ];
        setTodos(newTodos);
        setSubmittedCardTitle(!submittedcardtitle);
        setInput('');
        //console.log(...todos);
        };

    function deleteTodo(id){
        //console.log(id);
        const newList = todos.filter((todo,index) => index !== id);
        setTodos(newList);
    }


// render blocks *** *** ***

  function AddCardBTN(){
      return(
          <button 
              className='flex hover:shadow-md hover:bg-zinc-300 rounded-md 
                  bg-opacity-60 cursor-pointer'
              onClick={()=>(setSubmittedCardTitle(!submittedcardtitle))}>
              <PlusIcon className='w-5 h-5 my-auto'/>
              <h3 className=''>Add a card</h3> 
          </button>
      )}


return (
      <div className='flex gap-x-3 overflow-x-auto h-full p-10'>
        <>{AddAnotherList? 
            <>{/* AddAnotherListBTN*/}
                <button 
                    className='flex bg-zinc-200 p-2 rounded-md h-fit w-[272px] 
                        flex-shrink-0 bg-opacity-60 hover:shadow-lg'
                    onClick={()=>setAddAnotherList(!AddAnotherList)}
                    >
                        <PlusIcon className='w-5 h-5 my-auto'/>
                        <h3 className=''>Add another list</h3>
                </button>
                {/* END AddListInputBTN */}
            </>
            :
            <div className='flex flex-col bg-zinc-200 p-2 gap-y-2 rounded-md w-[272px] h-fit flex-shrink-0'>
                {submittedtitle?
                    <>
                        <h2 className='font-semibold text-xl py-1 px-2'>{newtitle}</h2>
                        <>{todos.map((todo,index) => (
                            <div key={index.toString()+todo.toString()}>

                                {/*console.log(todo,index)*/}
                                <div className='flex justify-between bg-zinc-100 rounded-md h-fit p-2 shadow-lg'>
                                    {/*<p>{todo.as},{todo.bs} ,{todo.as+todo.bs}, {index}</p>*/}
                                    <p><span className='text-2xl font-semibold pr-3 text-zinc-600'>{index}</span>{todo}</p>
                                    <XIcon key={index} onClick={()=>deleteTodo(index)} className="h-10 w-10 text-stone-500 "
                                    />
                                </div>
                            </div>
                          ))}
                        </>
                        {/*stuff <CardContainer todos={todos} />*/}
                        {submittedcardtitle? <AddCardBTN/> : 
                        <>
                            {/* AddCardInputBTN*/}
                            <input
                                placeholder='Enter Title For This Card'
                                onChange={handleChange}
                                className='p-1 rounded-md'
                            />
                            <div className='flex  gap-1'>
                                <button 
                                    onClick={()=>(
                                        //handleSubmit()
                                        addTodo(input)
                                        //setNewCardTitle(input),
                                        //console.log(input),
                                        //addTodo(input),
                                        //console.log('no-X-testo-vuoto inoltra newcardtitle nel cardcontainer'),
                                        //setSubmittedCardTitle(!submittedcardtitle)
                                        )}
                                    className='bg-zinc-300 rounded-md p-2'>Add card</button> 
                                <button onClick={()=>setSubmittedCardTitle(!submittedcardtitle)}>
                                    <XIcon className='w-5 h-5 my-auto'/></button>
                            </div>
                            {/* END AddCardInputBTN*/}
                        </>}
                    </>
                : 
                <>
                    {/* AddListInputBTN */}
                    <input
                        placeholder='Enter List Title'
                        onChange={handleChange}
                        className='p-1 rounded-md'
                    />
                    <div className='flex  gap-1'>
                        <button onClick={()=>(
                            setNewTitle(input),
                            setSubmittedTitle(!submittedtitle)
                            )}
                            className='bg-zinc-300 rounded-md p-2'>Add list</button> 
                        <button onClick={()=>setAddAnotherList(!AddAnotherList)}>
                            <XIcon className='w-5 h-5 my-auto'/></button>
                    </div>
                    {/* END AddListInputBTN */}                    
                </>
                }
            </div>  
            }
        </>
      </div>
    );}