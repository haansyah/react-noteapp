import { useState } from "react";
import toast from "react-hot-toast";
import "./App.css";
import DarkMode from "./Components/DarkMode";
import Footer from "./Components/Footer";
import HeaderNote from "./Components/HeaderNote";
import Navigation from "./Navigation";
import HeadingSection from "./Pages/HeadingSection";
import RoutePage from "./RoutePage";
import { getInitialData } from "./utils/Data";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [archived, setArchived] = useState(false);
  const [notes, setNotes] = useState(getInitialData());
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState([]);
  const [darkMode, setDarkMode] = useState([]);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  function addNoteHandler(event) {
    event.preventDefault();

    const messages = [
      "Title field shouldn't be empty",
      "Body field shouldn't be empty",
    ];

    if (!title) {
      return setMessage(messages);
    }

    if (!body) {
      return setMessage(messages);
    }

    setNotes([
      ...notes,
      {
        id: +new Date(),
        title: title,
        body: body,
        archived: archived,
        createdAt: new Date().toLocaleDateString("en-EN", options),
      },
    ]);

    clearAll();
    toast.success("Yay! Your Note has been Added", {
      position: "top-right",
      duration: 2000,
      style: {
        background: "#3CCF4E",
        color: "#fff",
      },
    });
  }

  function clearAll() {
    setArchived(false);
    setTitle("");
    setBody("");
    setMessage("");
  }

  function removeNoteHandler(id) {
    const filteredNotes = notes.filter(function (note) {
      return note.id !== id;
    });

    setNotes(filteredNotes);
    toast.error("Uhh :( Your Note has been deleted!", {
      position: "top-right",
      duration: 2000,
      style: {
        background: "#F37878",
        color: "#fff",
      },
    });
  }

  function archiveNoteHandler(note) {
    const updatedNote = {
      ...note,
      archived: note.archived ? false : true,
    };
    const editNoteIndex = notes.findIndex(function (currentNote) {
      return currentNote.id === note.id;
    });

    const updatedNotes = [...notes];
    updatedNotes[editNoteIndex] = updatedNote;

    setNotes(updatedNotes);
    toast.success(note.archived ? "Unarchived" : "Archived", {
      position: "top-right",
      duration: 2000,
      style: {
        background: "#A6D1E6",
        color: "#fff",
      },
      icon: note.archived ? "📂" : "📁",
    });
  }

  function onSearchHandler(e) {
    setSearch(e.target.value);
  }

  const filtered = !search
    ? notes
    : notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase())
      );

  function darkModeHandler() {
    setDarkMode(darkMode ? false : true);
  }

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <DarkMode darkMode={darkMode} darkModeHandler={darkModeHandler} />
      <HeaderNote />
      <Navigation
        search={search}
        setSearch={setSearch}
        onSearchHandler={onSearchHandler}
        notes={notes}
      />
      <HeadingSection
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        archived={archived}
        setArchive={setArchived}
        addNoteHandler={addNoteHandler}
        message={message}
      />
      <RoutePage
        filtered={filtered}
        removeNoteHandler={removeNoteHandler}
        archiveNoteHandler={archiveNoteHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
