import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const obj = { email: "", password: "" };
export default function Login() {
  const navigate = useNavigate();
  const [form, setform] = useState(obj);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://backendasgnment.onrender.com/login",
      data: form,
    })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          navigate("/student");
        } else {
          console.log({ err: "wrong credentials" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setform(obj);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={form.email}
          type="email"
          placeholder="email"
          onChange={handleChange}
          name="email"
        />
        <br />
        <input
          value={form.password}
          type="password"
          placeholder="password"
          onChange={handleChange}
          name="password"
        />
        <br />
        <input type="submit" />
      </form>
      <Link to="/signup">
        <button
          style={{
            marginTop: "10px",
          }}>
          Register
        </button>
      </Link>
    </>
  );
}
