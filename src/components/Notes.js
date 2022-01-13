import { useState,  } from 'react'
import NoteForm from './NoteForm'

const Notes = ({ notes, completeNote, removeNote, updateNote, time }) => { 
    const [edit, setEdit] = useState({
      id: null,
      value: ''
    })


    
    const submitUpdate = value => {
      updateNote(edit.id, value);
      setEdit({
        id: null,
        value: ''
      });
    };
  
    if (edit.id) {
      return <NoteForm edit={edit} onSubmit={submitUpdate} />;
    }

  return notes.map((note, index) => (

    <div className="card shadow-sm m-3 bg-body rounded">
        <div
            className={note.isComplete ? 'todo-row complete card' : 'todo-row'}
            key={index}
          >
            
            <div className="card-body bodyCard">
              <div  className="card-text" key={note.id} onClick={() => completeNote(note.id)}>
                <p className="text-start lh-sm">{note.text}</p>
              </div>

              <div className='row m-0'>
                <div className="col">
                  <p className="text-start">{time}</p>
                </div>

                <div className="col text-end">
                  <i className="bi bi-pen editIcon text-end m-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="edit" onClick={() => setEdit({ id: note.id, value: note.text })}/>
                  <i className="bi bi-trash deleteIcon text-end" data-bs-toggle="tooltip" data-bs-placement="bottom" title="delete"onClick={() => removeNote(note.id)} />
                </div>
              </div>
            </div>
          </div>

    </div>
    
  ));
}

export default Notes

