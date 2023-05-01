import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const EditStudent = () => {
  const { id } = useParams();
  const [student, setstudent] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setstudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "patch",
      url: `https://backendasgnment.onrender.com/student/update/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: student,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `https://backendasgnment.onrender.com/student`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        const student = res.data.filter((element) => {
          return element._id === id;
        });
        setstudent(student[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id=""
        value={student.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        id=""
        value={student.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="class"
        id=""
        value={student.class}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditStudent;
