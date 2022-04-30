import { useState, useEffect, useRef } from 'react';
import { XIcon, PlusIcon } from '@heroicons/react/solid';
import { useImmer } from "use-immer";

export default function NoteBoard() {
/*   const[AddAnotherList,setAddAnotherList]=useState(true);
  const[submittedcardtitle, setSubmittedCardTitle] = useState(true);
  const[submittedtitle, setSubmittedTitle] = useState(false);
  const[titolo, setTitolo] = useState(['']);
  const[todos, setTodos] = useState([]); */

  const[newcardtitle, setNewCardTitle] = useState();
  const[input, setInput] = useState();
  const[newtitle, setNewTitle] = useState();  

  const[listas,setListas]=useImmer([{ 
      
        listindex:'',
        title:'',
        addanotherlist:true,
        submittedcardtitle:true,
        submittedtitle:false,
        todos:[],
  }]); 
  const empty={
    listindex:'',
    title:'',
    addanotherlist:true,
    submittedcardtitle:true,
    submittedtitle:false,
    todos:[],
  }


    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        };

    function AddCardBTN(index){
      return(
          <button 
              className='flex hover:shadow-md hover:bg-zinc-300 rounded-md 
                  bg-opacity-60 cursor-pointer'
              onClick={()=>
                setListas((draft)=>{
                  draft[index].submittedcardtitle= !draft[index].submittedcardtitle;
                })

              }>
              <PlusIcon className='w-5 h-5 my-auto'/>
              <h3 className=''>Add a card</h3> 
          </button>
      )}



    function addList(index){
        const newlistas = [...listas,empty];
        setListas(newlistas);
        setListas((draft)=>{
            draft[index].submittedtitle = !draft[index].submittedtitle;
            draft[index].title=input;
            draft[index].listindex=index;
        })
    
    }
    function addTodo(todos,todo,index) {
        //console.log('ciao addtodo function');
        if (!todo) return;
        const newTodos = [...todos, todo.toString() ];
        setListas((draft)=>{
            draft[index].submittedcardtitle=!draft[index].submittedcardtitle;
            draft[index].todos=newTodos;
        })
        setInput(''); 
    }; 

    function deleteTodo(index,indext){
        //console.log(index,indext);
        setListas((draft)=>{
            draft[index].todos=draft[index].todos.filter((todo,id) => indext !== id)
        })
    } 
return(
<div className='flex gap-x-3 overflow-x-auto h-full p-10'>
    {listas.map((lista,index) => (
        <div key={index.toString()}>
            
            {lista.addanotherlist? 
                <button id='AddAnotherListBTN'
                    className='flex bg-zinc-200 p-2 rounded-md h-fit w-[272px] 
                        flex-shrink-0 bg-opacity-60 hover:shadow-lg'
                    onClick={()=>setListas((draft)=>{draft[index].addanotherlist = !draft[index].addanotherlist})}
                    >
                        <PlusIcon className='w-5 h-5 my-auto'/>
                        <h3 className=''>Add another list</h3>
                </button>
                
                :<div className='flex flex-col bg-zinc-200 p-2 gap-y-2 rounded-md w-[272px] h-fit flex-shrink-0'>
                    {lista.submittedtitle?
                    <><h2 className='font-semibold text-xl py-1 px-2'>{lista.title}</h2>
                    {/* card stuff */}
                        <>{listas[index].todos.map((todo,indext) => (
                            <div key={indext.toString()+todo.toString()}>

                                <div className='flex justify-between bg-zinc-100 rounded-md h-fit p-2 shadow-lg'>
                                    <p><span className='text-2xl font-semibold pr-3 text-zinc-600'>{indext+1}</span>{todo}</p>
                                    <XIcon key={indext}  onClick={()=>deleteTodo(index,indext)}  
                                        className="h-10 w-10 text-stone-500 rounded-md
                                        hover:shadow-md hover:text-stone-700 hover:bg-zinc-200"
                                    />
                                </div>
                            </div>
                          ))}

                        </>

                        {/*stuff <CardContainer todos={todos} />*/}
                        {listas[index].submittedcardtitle? AddCardBTN(index) : 
                        <>
                            {/* AddCardInputBTN*/}
                            <input
                                placeholder='Enter Title For This Card'
                                onChange={handleChange}
                                className='p-1 rounded-md'
                            />
                            <div className='flex  gap-1'>
                                <button 
                                    onClick={()=>(addTodo(listas[index].todos,input,index))}
                                    className='bg-zinc-300 rounded-md p-2'>Add card</button> 
                                <button /* onClick={()=>setSubmittedCardTitle(!submittedcardtitle)} */>
                                    <XIcon className='w-5 h-5 my-auto'/></button>
                            </div>
                            {/* END AddCardInputBTN*/}
                        </>}





                        {/* card stuff */}
                    </>
                    :
                    <><input
                        placeholder='Enter List Title'
                        onChange={handleChange}
                        className='p-1 rounded-md'
                        />
                        <div className='flex  gap-1'>
                             <button onClick={()=>addList(index)} 
                                className='bg-zinc-300 rounded-md p-2'>Add list</button> 
                            <button onClick={()=>setListas((draft)=>{draft[index].addanotherlist = !draft[index].addanotherlist})}>
                                <XIcon className='w-5 h-5 my-auto'/></button>
                        </div>
                    </>
                    }
                    
                </div>
            }
        </div>
    ))}
</div>
);}



