import { useState } from 'react'
import NoteForm from './NoteForm'
import Notes from './Notes';

const NoteList = () => {

    const [notes, setNotes] = useState([])
    const [time, setTime] = useState("")
    

    const addNotes = note => {
        if (!note.text || /^\s*$/.test(note.text)) {
          return;
        }
        const newTime = new Date().toLocaleString()
        setTime(newTime);
    
        const newNote = [note, ...notes];
        
    
        setNotes(newNote);
        console.log(...notes);
      };
    
      const updateNote = (noteId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setNotes(prev => prev.map(item => (item.id === noteId ? newValue : item)));
      };
    
      const removeNote = id => {
        const removedArr = [...notes].filter(note => note.id !== id);
    
        setNotes(removedArr);
      };
    
      const completeNote = id => {
        let updatedNotes = notes.map(note => {
          if (note.id === id) {
            note.isComplete = !note.isComplete;
          }
          return note;
        });
        setNotes(updatedNotes);
      };

    

    return (
        <div>
            <h3>Notes App</h3>
            <NoteForm onSubmit={addNotes}/>
            
            <Notes
                time={time}
                notes={notes}
                completeNote={completeNote}
                removeNote={removeNote}
                updateNote={updateNote}
            />
            
        </div>
    )
}

export default NoteList
