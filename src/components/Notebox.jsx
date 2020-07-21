import React, { useState } from "react"
import NewNoteForm from "./NewNoteForm";
import Note from "./Note";


export default function Notebox() {
const [notes, setNotes] = useState([]);

    function AddNote(value) {
        setNotes(previousItems => {
            return [...previousItems, value]
        });
    };
    //Set the new array of notes == to the previous notes with the specific id filtered out (based on array index)
    function deleteNote(id) {
        setNotes(previousItems => {
            return previousItems.filter((notes, index) => {
                return index !== id;
            });
        });
    };
    return (
        <div className="notebox">
            <NewNoteForm onAdd={AddNote}/>
        </div>
    )
}