"use client";
import React, { useState, FC } from "react";
interface props {
  noteText: string;
  noteColor: string;
  setNoteText: React.Dispatch<React.SetStateAction<string>>;
  setNoteColor: React.Dispatch<React.SetStateAction<string>>;
  onSaveNote: () => void;
}
const AddEditNote: FC<props> = ({
  noteText,
  setNoteText,
  noteColor,
  setNoteColor,
  onSaveNote,
}) => {
  const colors = ["#fef08a", "#FCA5A5", "#A5B4FC", "#86EFAC", "#F9A8D4"];

  return (
    <div
      className="flex  flex-col justify-between  rounded-xl p-4 min-h-60"
      style={{ backgroundColor: noteColor }}
    >
      <textarea
        className="bg-transparent resize-none "
        cols={10}
        rows={7}
        maxLength={200}
        value={noteText}
        placeholder="Typing ...."
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>

      <div className="flex items-center justify-between">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-6 h-6 rounded-full border-2  `}
            style={{ backgroundColor: color }}
            onClick={() => setNoteColor(color)}
          />
        ))}
        <button onClick={onSaveNote}>Save</button>
      </div>
    </div>
  );
};

export default AddEditNote;
