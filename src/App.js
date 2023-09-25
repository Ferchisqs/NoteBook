import { useEffect, useState } from "react";
import NotesList from "./components/organisms/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/organisms/Search";
import Header from "./components/molecules/Header";
import Siderbar from "./components/organisms/Siderbar";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    console.log("Cargando notas desde localStorage");
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
    
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      console.log("Guardando notas en localStorage");
      localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    }
  }, [notes, loading]);

  const addNote = (text, color) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      color: color, // Usar el color que se pasa como argumento
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };


  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };


  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Siderbar onSelectColor={handleColorSelect} isDarkMode={darkMode} />
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          selectedColor={selectedColor}
          
        />
         <Siderbar onSelectColor={handleColorSelect} isDarkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;
