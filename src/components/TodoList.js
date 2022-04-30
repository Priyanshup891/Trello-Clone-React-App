import { XIcon, PlusIcon } from '@heroicons/react/solid';


export default function TodoList(props){
    return(
        <>
        
        </>
    
)}


const storedlista= JSON.parse(localStorage.getItem("storedlista"));
if(storedlista) setListas(storedlista)
function updateLS() {
    localStorage.setItem("storedlista", JSON.stringify(listas));
}

//// test code js
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}

function updateLS() { //update local storage
    const notesText = document.querySelectorAll("textarea");
    //create a variable for all the textarea objects
    const notes = []; //array of notes
    //scan the notesText object and fills the notes array
    notesText.forEach((note) => {
        notes.push(note.value);
    });
    //Appends new elements to the end of an array
    
    localStorage.setItem("notes", JSON.stringify(notes));
    //store all the notes as strings
}