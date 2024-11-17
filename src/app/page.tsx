"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import useNoteStore from "@/noteStore";
import HistoryPage from "./components/historyPage";

export default function Home() {
  const { notes } = useNoteStore();
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [editToggle, setEditToggle] = useState<number>(0);
  const [openHistory, setOpenHistory] = useState<boolean>(false);

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    router.push("/login");
  };

  useEffect(() => {
    if (!localStorage.getItem("isAuthenticated")) {
      router.push("/login");
    }
  }, [notes]);

  return (
    <main className="container mx-auto px-4">
      {openHistory ? (
        <HistoryPage setOpenHistory={setOpenHistory} />
      ) : (
        <>
          <header className="flex justify-between items-center py-2 sticky top-0 bg-white z-10">
            <h1 className=" text-2xl">Note Easy</h1>
            <div className="flex gap-4 items-center ">
              {/* <Link href="/history" className="hover:underline cursor-pointer">
            History Page
          </Link> */}
              <a
                onClick={() => setOpenHistory(true)}
                className="hover:underline cursor-pointer"
              >
                History Page
              </a>
              <a
                onClick={handleLogout}
                className="hover:underline cursor-pointer"
              >
                Logout
              </a>
              <button
                className="px-3 py-2 border border-yellow-200 rounded-xl hover:scale-110 transition-all"
                onClick={() => (setOpenAdd(!openAdd), setEditToggle(0))}
              >
                Add Note
              </button>
            </div>
          </header>

          <NoteList
            openAdd={openAdd}
            setOpenAdd={setOpenAdd}
            editToggle={editToggle}
            setEditToggle={setEditToggle}
          />
        </>
      )}
    </main>
  );
}
