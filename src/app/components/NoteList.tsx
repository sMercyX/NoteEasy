import React, { useState, FC, useEffect } from "react";
import NoteItem from "./NoteItem";
import AddEditNote from "./AddEditNote";
import { Note } from "@/types";
import useNoteStore from "@/noteStore";

interface props {
  openAdd: boolean;
  setOpenAdd: React.Dispatch<React.SetStateAction<boolean>>;
  editToggle: number;
  setEditToggle: React.Dispatch<React.SetStateAction<number>>;
}

const NoteList: FC<props> = ({
  openAdd,
  setOpenAdd,
  editToggle,
  setEditToggle,
}) => {
  const [noteText, setNoteText] = useState<string>("");
  const [noteColor, setNoteColor] = useState<string>("#fef08a");
  const [sortBy, setSortBy] = useState<string>("latest");

  const { notes, addNote, updateNote, deleteNote } = useNoteStore();
  const editHandle = (id: number, text: string, color: string) => {
    setOpenAdd(false);
    setEditToggle(id);
    setNoteText(text);
    setNoteColor(color);
  };

  const handleSaveNote = () => {
    if (editToggle) {
      const date = new Date();
      updateNote(editToggle, noteText, noteColor, date.toLocaleDateString());
    } else {
      const date = new Date();
      const username = localStorage.getItem("username");

      const newNote: Note = {
        id: Date.now(),
        text: noteText,
        creator: username ?? "guest",
        date: date.toLocaleDateString(),
        color: noteColor,
      };
      addNote(newNote);
    }

    setNoteText("");
    setNoteColor("#fef08a");
    setEditToggle(0);
    setOpenAdd(false);
  };

  const handleDelete = (id: number) => {
    deleteNote(id);
  };

  let sortedNote;
  if (sortBy === "latest") sortedNote = notes;
  if (sortBy === "color")
    sortedNote = notes.slice().sort((a, b) => a.color.localeCompare(b.color));

  useEffect(() => {
    if (openAdd == true) setNoteText("");
    setNoteColor("#fef08a");
  }, [openAdd]);

  return (
    <>
      <small className="flex justify-end mr-6 mb-2">
        sortd by
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="latest">latest</option>
          <option value="color">color</option>
        </select>
      </small>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {openAdd == true && (
          <AddEditNote
            noteText={noteText}
            setNoteText={setNoteText}
            noteColor={noteColor}
            setNoteColor={setNoteColor}
            onSaveNote={handleSaveNote}
          />
        )}

        {sortedNote?.map((note) =>
          editToggle === note.id ? (
            <AddEditNote
              key={note.id}
              noteText={noteText}
              noteColor={noteColor}
              setNoteText={setNoteText}
              setNoteColor={setNoteColor}
              onSaveNote={handleSaveNote}
            />
          ) : (
            <NoteItem
              key={note.id}
              note={note}
              onEdit={editHandle}
              onDelete={handleDelete}
            />
          )
        )}
      </div>
    </>
  );
};

export default NoteList;
