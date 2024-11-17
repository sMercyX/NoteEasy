"use client";
import React, { useState, FC } from "react";
import Image from "next/image";
import deleteIcon from "../../../public/delete.svg";
import editIcon from "../../../public/edit.svg";
import type { Note } from "@/types";

interface props {
  note: Note;
  onEdit: (id: number, text: string, color: string) => void;
  onDelete: (id: number) => void;
}

const Note: FC<props> = ({ note, onEdit, onDelete }) => {
  return (
    <div
      className="flex  flex-col justify-between  rounded-xl p-4 min-h-60"
      style={{ backgroundColor: note.color }}
    >
      <textarea
        className="bg-transparent resize-none "
        readOnly
        cols={10}
        rows={7}
        maxLength={200}
        value={note.text}
      />

      <div className="flex items-center justify-between">
        <div>
          <small>{note.creator} </small>
          <small>{note.date}</small>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src={editIcon}
            className="hover:scale-110 transition-all w-5"
            onClick={() => onEdit(note.id, note.text, note.color)}
            alt="editIcon"
          />

          <Image
            src={deleteIcon}
            className="hover:scale-110 transition-all w-5"
            alt="deleteIcon"
            onClick={() => onDelete(note.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
