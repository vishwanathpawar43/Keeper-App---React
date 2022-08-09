import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expanded,setExpanded]=useState(false);

  function handleClick()
  {
     setExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
       { 
          expanded && 
          <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          autoComplete="off"
        />
       }
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleClick}
          value={note.content}
          placeholder="Take a note..."
          rows={expanded? "3":"1"}
          autoComplete="off"
        />
        <Zoom in={expanded ?true:false}>
          <Fab
            onClick={submitNote}><AddIcon/>
          </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
