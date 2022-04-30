import { XIcon, PlusIcon } from '@heroicons/react/solid';


export default function TodoCard(props){
    return(
        <div className='flex justify-between bg-zinc-100 rounded-md h-fit p-2 shadow-lg'>
            <p><span className='text-2xl font-semibold pr-3 text-zinc-600'>
                {props.indext+1}</span>{props.todo}</p>
            <XIcon key={props.indext}  onClick={()=>props.deleteTodo(props.index,props.indext)}  
                className="h-10 w-10 text-stone-500 rounded-md
                hover:shadow-md hover:text-stone-700 hover:bg-zinc-200"
                />
        </div>
    
)}