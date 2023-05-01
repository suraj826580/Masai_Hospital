import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Student() {
  const [data, setdata] = useState([]);
  const [flag, setflag] = useState(true);

  const handleDelete = (id) => {
    axios({
      method: "delete",
      url: `https://backendasgnment.onrender.com/student/delete/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setflag(!flag);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "https://backendasgnment.onrender.com/student",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [flag]);
  return (
    <div>
      {data.length > 0 ? (
        <>
          {data.map((item) => (
            <div key={item._id}>
              <h2>{item.name}</h2>
              <h2>{item.class}</h2>
              <h2>{item.age}</h2>
              <button onClick={() => handleDelete(item._id)}>delete</button>
              <Link to="/addStudent">
                <button>Add Student</button>
              </Link>
              <Link to={`/student/${item._id}`}>
                <button>Edit</button>
              </Link>
            </div>
          ))}
        </>
      ) : (
        <Link to="/addStudent">
          <button>Add Student</button>
        </Link>
      )}
    </div>
  );
}
