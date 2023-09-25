import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Note = ({id,text,date, handleDeleteNote, selectedColor}) => {


    const noteStyle = {
        backgroundColor: selectedColor,
      };
    return (
        <div className="note" style={noteStyle}>
            
            <span>{text}</span>
            <div className="note-footer"> </div>
            <small>{date}</small>
            <DeleteForeverIcon
             onClick={() => handleDeleteNote (id)}
              className="delete-icon" 
              size="1.3em"/>
        </div>
    )

}
export default Note;