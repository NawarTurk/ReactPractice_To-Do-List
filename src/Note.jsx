import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note({id, title, content, onDelete}) {
    function handleClick() {
        onDelete(id);
    }

    const divStyle = {
        borderStyle: 'solid', 
        borderWidth: '1px',   
        borderColor: 'black' 
      };

    return (
        <div style={divStyle}>
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClick}> 
                <DeleteForeverIcon />
            </button>
           
        </div>
    )
}

export default Note;