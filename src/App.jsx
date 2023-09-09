import React, {useState} from 'react';
import Header from './Header';
import NoteCreator from './NoteCreator';
import Note from './Note';
import Footer from './Footer'

function App() {

    const[notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((previousValue) => {
            console.log("the previous value", previousValue);
            console.log("the new note", newNote)
            return (
                [
                ...previousValue,
                newNote
                ]
            )
        });
    }

    function deleteNote(noteID) {
        setNotes(
            notes.filter((note, index) => index !== noteID)
        ); 
    }

const noteList = notes.map((note, index) => 
    <Note 
        key={index} 
        id={index} 
        title={note.title} 
        content={note.content} 
        onDelete={deleteNote} 
    />)

    return (
        <>
            <Header />
            <NoteCreator onCreate={addNote}/>
            {noteList}
            <Footer />
        </>
    )
}

export default App;