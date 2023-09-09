import React from 'react';

function Note({id, title, content, onDelete}) {
    function handleClick() {
        onDelete(id);
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClick}>delete</button>
        </div>
    )
}

export default Note;