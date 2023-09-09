import React, {useState} from 'react';
import Button from '@mui/material/Button';



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
            <button onClick={handleSubmit}>Add</button>
        </form>
    )
}

export default NoteCreator;