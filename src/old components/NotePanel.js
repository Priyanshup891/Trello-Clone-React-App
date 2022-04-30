import { XIcon, PlusIcon } from '@heroicons/react/solid';
import NewNotePanel from './NewNotePanel';

export default function NotePanel(lista) {
    return (
      <div className='flex flex-col bg-zinc-200 p-2 rounded-md h-fit w-[272px] gap-y-2 flex-shrink-0'>
            <h2 className='font-semibold font-xl pb-1 px-2'>{lista.title}</h2>
            <div className='flex '>
               <PlusIcon className='w-5 h-5 my-auto'/>
                <h3 className=''>Add a card</h3> 
            </div>
        </div>
)}

