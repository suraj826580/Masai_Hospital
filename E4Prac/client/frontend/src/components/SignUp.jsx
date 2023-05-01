import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const obj = {
  name: "",
  class: "",
  subject: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const [form, setform] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://backendasgnment.onrender.com/register",
      data: form,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setform(obj);
  };

  return (
    <>
      <h2>Teacher Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          required
          placeholder="class"
          name="class"
          value={form.class}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          required
          placeholder="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          required
          placeholder="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          required
          placeholder="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      <Link to="/">
        <button
          style={{
            marginTop: "10px",
          }}>
          Login
        </button>
      </Link>
    </>
  );
}
