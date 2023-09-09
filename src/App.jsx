import React, {useState} from 'react';
import Header from './Header';
import NoteCreator from './NoteCreator';
import Note from './Note';
import Footer from './Footer'

function App() {

    const[notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((previousValue) => {
            return (
                [
                ...previousValue,
                newNote
                ]
            )
        });
        console.log(notes);
    }

    function deleteNote(noteID) {

    }

    const noteList = notes.map((note, index) => <Note key={index} id={index} title={note.title} content={note.title} />)

    return (
        <>
            <Header />
            <NoteCreator onSubmit={addNote}/>
            {noteList}
            <Footer />
        </>
    )
}

export default App;