import React from 'react';

function NoteCreator() {
    return (
        <form>
            <input placeholder="Title" />
            <textarea placeHolder="Content" rows="10"/>
            <button>Add</button>
        </form>
    )
}

export default NoteCreator;