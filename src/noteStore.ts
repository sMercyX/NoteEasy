import { create } from "zustand";
import { HistoryType, Note } from "./types";

interface NoteStore {
  notes: Note[];
  addNote: (newNote: Note) => void;
  editHistory: HistoryType[];
  updateNote: (id: number, text: string, color: string, date: string) => void;
  deleteNote: (id: number) => void; // Add deleteNote method
}

const useNoteStore = create<NoteStore>((set) => ({
  notes: [],
  editHistory: [],
  addNote: (newNote) =>
    set((state) => ({
      notes: [newNote, ...state.notes],
    })),

  updateNote: (id, text, color, date) =>
    set((state) => {
      const editNote = state.notes.find((note) => note.id === id);
      if (!editNote) return state;

      const isTextChanged = editNote.text !== text;
      const isColorChanged = editNote.color !== color;

      if (!isTextChanged && !isColorChanged) {
        return state;
      }

      const updatedNote = { ...editNote, text, color, date };

      const historyBefore: HistoryType = {
        id: Date.now(),
        textBefore: editNote.text,
        textAfter: updatedNote.text,
        colorBefore: editNote.color,
        colorAfter: updatedNote.color,
        date: updatedNote.date,
      };

      return {
        notes: state.notes.map((note) => (note.id === id ? updatedNote : note)),

        editHistory: [historyBefore, ...state.editHistory],
      };
    }),

  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),
}));

export default useNoteStore;
