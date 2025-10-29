import { useState } from "react";
import "./App.css";
import AutoCounter from "./components/AutoCounter";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import Todos from "./components/Todos";
import WelcomeMessage from "./components/WelcomeMessage";
import PostsPage from "./PostsPage";
import type { Note } from "./types";
import Notes from "./components/Notes";
import { AppContext } from "./AppContext";
import useWindowResize from "./hooks/useWindowResize";

function App() {
  const [showCounter, setShowCounter] = useState(false);

  const [notes, setNotes] = useState<Note[]>([
    {
      text: "note 1",
      id: 1,
      starred: true,
    },
    {
      text: "note 2",
      id: 2,
      starred: false,
    },
    {
      text: "note 3",
      id: 3,
      starred: false,
    },
    {
      text: "note 4",
      id: 4,
      starred: false,
    },
    {
      text: "note 5",
      id: 5,
      starred: false,
    },
    {
      text: "note 6",
      id: 6,
      starred: false,
    },
  ]);

  const size = useWindowResize();

  const toggleStarNote = (id: number) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, starred: !note.starred } : note
      )
    );
  };

  const deleteNote = (noteId: number) => {
    const filteredTodos = notes.filter((note) => note.id !== noteId);
    setNotes(filteredTodos);
  };



  return (
    <AppContext.Provider value={{
      notes,
      toggleStarNote,
      deleteNote
    }}>
      {size.width < 318 ? <h1>Resolution not Supported</h1> : <>
        <WelcomeMessage
          isLoggedIn={true}
          user={{
            name: "Umar",
            type: "admin",
          }}
        />
        <div id="root">
          <Cart />
          <Counter />
          <LoginForm />
          <Notes />
          <Todos />
          {showCounter && <AutoCounter />}
        </div>
        <button
          className="button min-w-5 mx-auto"
          onClick={() => {
            setShowCounter((show) => !show);
          }}
        >
          Toggle Show Counter
        </button>
        <PostsPage />
      </>
      }
    </AppContext.Provider >
  );
}

export default App;
