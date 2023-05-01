import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const obj = { name: "", age: "", class: "" };

export default function AddStudent() {
  const [form, setform] = useState(obj);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "https://backendasgnment.onrender.com/student",
      data: form,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res);
        setform(obj);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={handleChange}
          value={form.name}
          name="name"
        />
        <br />
        <input
          type="text"
          placeholder="age"
          onChange={handleChange}
          value={form.age}
          name="age"
        />
        <br />
        <input
          type="text"
          placeholder="class"
          onChange={handleChange}
          value={form.class}
          name="class"
        />
        <br />
        <input type="submit" />
      </form>
      <Link to="/student">
        <button>Students</button>
      </Link>
    </>
  );
}
