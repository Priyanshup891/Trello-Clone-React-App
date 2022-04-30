import { XIcon, PlusIcon } from '@heroicons/react/solid';


export default function ListTitleComponent(props){
    //my-auto
    return(
        <div className='flex justify-between gap-1 '>
            <h2 className='font-semibold text-xl py-1 px-2 my-auto'>{props.title}</h2>
            <XIcon key={props.index}  onClick={()=>props.deleteLista(props.index)}  
                className="h-5 w-5 text-stone-500 rounded-md my-auto
                hover:shadow-md hover:text-stone-600 hover:bg-zinc-200"
                />
        </div>
    
)}