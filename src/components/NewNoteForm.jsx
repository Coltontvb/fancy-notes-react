import React, { useState } from "react";

export default function NewNoteForm(props){

    const [note, setInput] = useState({});

    function handleNewInput(event) {
        const { value, name } = event.target;
        //SET VALUE BASED ON THE NAME GIVEN, MUST USE SPREAD TO SET
        
    }

    return (
        <div className="new-note-form">
            <input type="text" placeholder="Fancy Title" name="title" onChange={handleNewInput} />
            <hr />
            <textarea placeholder="Enter some Fancy content" name="content" onChange={handleNewInput} />
            <button  onClick={() => {
                props.onAdd(note)
            }} className="add-note-icon">+</button>
        </div>
    )
}
