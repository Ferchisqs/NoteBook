
import React from "react";
import Note from "./Note"; 
import AddNote from "./AddNote";

const NotesList = ({ notes, handleDeleteNote, selectedColor, handleAddNote }) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note
                    key={note.id} 
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                    selectedColor={selectedColor}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />

        </div>
    );
};

export default NotesList;