import React from 'react';

function Note({id, title, content}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <button>delete</button>
        </div>
    )
}

export default Note;