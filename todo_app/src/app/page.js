"use client";
import { useState } from "react";

export default function Home() {
  const [formValue, setformValue] = useState("");
  const [todoList, settodoList] = useState([]);

  const handleSubmit = (e) => {
    formValue != "" ? settodoList((pre) => [...pre, formValue]) : null;
    setformValue("");
  };

  const handleDelete = (index) => {
    const newArr = todoList.filter((item, ind) => ind != index);
    settodoList((pre) => newArr);
  };
  return (
    <main>
      <div className="min-h-screen w-2/5 m-auto p-10">
        <h1 className="text-4xl font-semibold">My tasks</h1>
        <div className="mt-10">
          {todoList.length > 0
            ? todoList.map((item, index) => {
                return (
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h1 className="text-2xl">{item}</h1>
                    </div>
                    <div className="flex gap-5">
                      <button className="bg-green-800 px-2 py-1 rounded-md">
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(index);
                        }}
                        className="bg-red-500 px-2 py-1 rounded-md">
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            : "You have no task"}
        </div>
        <input
          onChange={(e) => setformValue(e.target.value)}
          name="title"
          className="w-full rounded-md py-2 mt-5 text-black px-2"
          value={formValue}
          placeholder="Todo"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded w-full mt-5 py-3">
          Add Task
        </button>
      </div>
    </main>
  );
}
