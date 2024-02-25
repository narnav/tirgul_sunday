import axios from "axios";
import React, { useEffect, useState } from "react";

const Student = () => {
    // get data from server
  const MY_SERVER = "http://127.0.0.1:8000/";
  const [age, setage] = useState(0);
  const [sName, setsName] = useState("");
  const [students, setstudents] = useState([]);

  useEffect(() => {
    axios.get(MY_SERVER + "students").then((res) => setstudents(res.data));
  }, []);
 
  const handleAddStudent = () => {
    axios
      .post(MY_SERVER + "students", { sName, age })
      .then((res) => console.log(res.data));
  };
  return (
    <div><h1>Students list</h1>
    {students.length}
    {students.map((student) => (
      <div>
        {student.sName},{student.age}
      </div>
    ))}
    name:
    <input onChange={(e) => setsName(e.target.value)} />
    age:
    <input onChange={(e) => setage(e.target.value)} />
    <button onClick={() => handleAddStudent()}>Add</button>
    <hr></hr></div>
  )
}

export default Student