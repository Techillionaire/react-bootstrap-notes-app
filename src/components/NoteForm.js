import { useState, useEffect, useRef } from "react"

const NoteForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
   

    

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input

            
        });
        setInput("")
    }

    return (
        <form className="noteForm" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <div class="input-group p-3">
                    <input 
                        name='text'
                        ref={inputRef}
                        type="text" 
                        className="form-control" 
                        placeholder="Update note" 
                        aria-label="Example text with button addon" 
                        aria-describedby="button-addon1" 
                        value={input}
                        onChange={handleChange}
                    />
                    <button  onClick={handleSubmit} className="btn btn-primary" type="button" id="button-addon1">Update</button>
                </div>

                </>
            ) : (
                <>

                <div class="input-group p-3">
                    <input 
                        name='text'
                        ref={inputRef}
                        type="text" 
                        className="form-control" 
                        placeholder="Add a note" 
                        aria-label="Example text with button addon" 
                        aria-describedby="button-addon1" 
                        value={input}
                        onChange={handleChange}
                    />
                    <button  onClick={handleSubmit} className="btn btn-primary" type="button" id="button-addon1">SAVE</button>
                </div>
                
                </>
            )}
            
        </form>
    )
}

export default NoteForm
