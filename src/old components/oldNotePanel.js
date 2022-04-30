import { XIcon, PlusIcon } from '@heroicons/react/solid';
import { useState ,useEffect, useRef} from 'react';
import NotePanel from './NotePanel';
import CardContainer from './CardContainer'

export default function NewNotePanel(props, todos,addTodo) {
    const[AddAnotherList,setAddAnotherList]=useState(true);
    const[newtitle, setNewTitle] = useState();
    const[newcardtitle, setNewCardTitle] = useState();
    const[submittedtitle, setSubmittedTitle] = useState(false);
    const[submittedcardtitle, setSubmittedCardTitle] = useState(true);
    const[input, setInput] = useState();

    

    
    
    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        //setneettitlef
        };
        
    function handleSubmit(){
        //e.preventDefault();
        setNewCardTitle(input);
        console.log(input);
        props.onSubmit({
            as:'asdg'
        })
        //si rompe qua
        addTodo(newcardtitle);
        console.log('no-X-testo-vuoto inoltra newcardtitle nel cardcontainer');
        setSubmittedCardTitle(!submittedcardtitle)
        };

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

        //<CardContainer todos={todos} />
    return (
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
                        <h2 className='font-semibold font-xl py-1 px-2'>{newtitle}</h2>
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
                                        handleSubmit()
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
                            setSubmittedTitle(!submittedtitle),
                            setNewTitle(input)
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
    );}

