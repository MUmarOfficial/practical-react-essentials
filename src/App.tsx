import { useCallback, useEffect, useMemo, useState } from "react";
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
import useFetch from "./hooks/useFetch";

function App() {
  const [showCounter, setShowCounter] = useState(false);

  const [notes, setNotes] = useState<Note[]>([])

  const { data, loading } = useFetch<Note[]>("https://jsonplaceholder.typicode.com/todos");

  useEffect(() => {
    // Run on Component mount
    setNotes(data ?? []);
  }, [data]);

  const size = useWindowResize();

  const toggleStarNote = (id: number) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  const deleteNote = useCallback((noteId: number) => {
    const filteredTodos = notes.filter((note) => note.id !== noteId);
    setNotes(filteredTodos);
  }, [notes]);

  const contextValue = useMemo(() => ({
    notes,
    toggleStarNote,
    deleteNote
  }), [notes, deleteNote]);

  if (loading) {
    return <h1 className="mx-auto text-2xl text-center">Loading......</h1>
  }

  return (
    <AppContext.Provider value={contextValue}>
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
