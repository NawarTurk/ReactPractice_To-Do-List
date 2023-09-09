import React, {useState} from 'react';


function NoteCreator({onSubmit}) {

    const[newNote, setNewNote] = useState(
        {
            title: "",
            content:""
        });


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
        onSubmit(newNote);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" value={newNote.title} onChange={handleNoteCreatorChange}/>
            <textarea name="content" placeHolder="Content" value={newNote.content} rows="10" onChange={handleNoteCreatorChange}/>
            <button>Add</button>
        </form>
    )
}

export default NoteCreator;