import React, {useState} from 'react';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';



function NoteCreator({onCreate}) {

    const[newNote, setNewNote] = useState(
        {
            title: "",
            content:""
        });

    const [isExapnded,setIsExpanded] = useState(false);


    function handleNoteCreatorChange(event) {
        const {name, value} = event.target;
        setNewNote((previousValue) => {
    
        return {
                ...previousValue,
                [name] : value
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
  
        onCreate(newNote);

        setNewNote(
            {
                title: "",
                content:""
            }
        );
        
        setIsExpanded(() => false); //??

    }

    function handleTextAreaClick() {
        setIsExpanded(() => true)
    }

    return (
        <form>
            <div>
                {isExapnded && <input name="title" placeholder="Title" value={newNote.title} onChange={handleNoteCreatorChange}/>}
            </div>
            <textarea name="content" placeholder= {isExapnded?"Add content":"Click here to start a new note"} value={newNote.content} rows={isExapnded?"10":"3"} onClick={handleTextAreaClick} onChange={handleNoteCreatorChange}/>
            
            {isExapnded && <div>
                <Zoom in={true}>
                    <Fab onClick={handleSubmit} size="medium">
                        <AddIcon />
                    </Fab>
                </Zoom>
            </div>
            }

        </form>
    )
}

export default NoteCreator;