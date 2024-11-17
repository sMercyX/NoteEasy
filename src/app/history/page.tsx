"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import goBackButton from "../../../public/goBack.svg";
import useNoteStore from "@/noteStore";
import { useRouter } from "next/navigation";

function HistoryPage() {
  const { editHistory } = useNoteStore();
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("isAuthenticated")) {
      router.push("/login");
    }
  });

  return (
    <div className="container mx-auto px-4 py-6 ">
      <Link href="/" className="absolute">
        <Image src={goBackButton} alt="Go Back" width={40} />
      </Link>
      <header className="flex  items-center justify-center mb-6">
        <h1 className="text-3xl font-bold ">History</h1>
      </header>

      <div className="rounded-lg bg-blue-200 ">
        <ul className="space-y-4 p-4 h-[80vh] overflow-y-scroll ">
          {editHistory.map((note) => (
            <li
              key={note.id}
              className="border border-gray-300 rounded-lg shadow-md p-4 bg-white "
            >
              <div className="mb-2">
                {note.textBefore == note.textAfter ? (
                  <p className="text-sm text-gray-600">
                    <strong>Text :</strong> {note.textBefore}
                  </p>
                ) : (
                  <>
                    <p className="text-sm text-gray-600">
                      <strong>Text :</strong> {note.textBefore}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Change Text To : </strong> {note.textAfter}
                    </p>
                  </>
                )}
              </div>
              <div className="mb-2">
                {note.colorBefore === note.colorAfter ? (
                  <p className="text-sm text-gray-600 flex items-center">
                    <strong>Color :</strong>
                    <span
                      style={{
                        backgroundColor: note.colorBefore,
                      }}
                      className="inline-block w-4 h-4 rounded-full ml-2 border border-gray-300"
                    ></span>
                  </p>
                ) : (
                  <>
                    <p className="text-sm text-gray-600 flex items-center">
                      <strong>Color :</strong>
                      <span
                        style={{
                          backgroundColor: note.colorBefore,
                        }}
                        className="inline-block w-4 h-4 rounded-full ml-2 border border-gray-300"
                      ></span>
                    </p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <strong>Change Color To:</strong>
                      <span
                        style={{
                          backgroundColor: note.colorAfter,
                        }}
                        className="inline-block w-4 h-4 rounded-full ml-2 border border-gray-300"
                      ></span>
                    </p>
                  </>
                )}
              </div>

              <p className="text-sm text-gray-500">Updated at : {note.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HistoryPage;
