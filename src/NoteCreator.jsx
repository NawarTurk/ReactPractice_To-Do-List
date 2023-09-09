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


    function handleNoteCreatorChange(event) {
        const {name, value} = event.target;

        // console.log("name", name);
        
        // console.log("value", value);

        setNewNote((previousValue) => {
            // console.log("previousValue", previousValue )
        return {
                ...previousValue,
                [name] : value
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // console.log("new note: ", newNote)
        onCreate(newNote);

        setNewNote(
            {
                title: "",
                content:""
            }
        );
    }

    return (
        <form>
            <input name="title" placeholder="Title" value={newNote.title} onChange={handleNoteCreatorChange}/>
            <textarea name="content" placeholder="Content" value={newNote.content} rows="10" onChange={handleNoteCreatorChange}/>
            <Zoom in={true}>
                <Fab onClick={handleSubmit} size="medium">
                    <AddIcon />   
                </Fab>
            </Zoom>
        </form>
    )
}

export default NoteCreator;