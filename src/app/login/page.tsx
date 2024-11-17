"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const cUsername = "Guy";
    const cPassword = "123";

    if (username === cUsername && password === cPassword) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("username", `${username}`);
      router.push("/");
    } else {
      setError("Invalid username or password");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated")) {
      router.push("/");
    }
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col gap-4 bg-white p-8 rounded shadow-md w-96">
        <h1 className="flex justify-center text-2xl font-bold  ">Login</h1>
        {error && <p className="text-red-500 text-sm ">{error}</p>}
        <div>
          <h1>Username</h1>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 w-full border rounded"
          />
        </div>
        <div>
          <h1>Password</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 w-full border rounded"
          />
        </div>
        <button
          onClick={handleLogin}
          className="py-3 px-4 text-lg hover:text-xl rounded transition-all bg-blue-400 hover:bg-blue-500 text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}
