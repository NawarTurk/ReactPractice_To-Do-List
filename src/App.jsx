import React from 'react';
import Header from './Header';
import NoteCreator from './NoteCreater';
import Note from './Note';
import Footer from './Footer'

function App() {
    return (
        <>
            <Header />
            <NoteCreator />
            <Note />
            <Footer />
        </>
    )
}

export default App;