import { useContext } from "react";
import StickyNote from "./StickyNotes";
import { AppContext } from "../AppContext";

const Notes = () => {

    const { notes } = useContext(AppContext);

    return (
        <section className="flex flex-col gap-5 m-7 p-7 justify-center  border-2 border-transparent transition duration-300 hover:border-white rounded-2xl bg-black backdrop-blur-xl shadow-lg min-w-xs mx-auto">
            <h1 className="text-3xl">Notes</h1>
            <ul className="mx-auto place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {notes.map((noteItem) => {
                    return (
                        <StickyNote key={noteItem.id} note={noteItem} />
                    );
                })}
            </ul>
        </section>
    );
};

export default Notes;