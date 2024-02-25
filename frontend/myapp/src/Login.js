import axios from "axios";
import React, { useEffect, useState } from "react";

const Login = () => {
  const MY_SERVER = "http://127.0.0.1:8000/";
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [token, settoken] = useState("");
  const handleLogin = () => {
    axios
      .post(MY_SERVER + "login/", { username, password })
      .then((res) => settoken(res.data));
  };

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token.access));
  }, [token]);
  return (
    <div>
      <h1>Login</h1>
      username:
      <input onChange={(e) => setusername(e.target.value)} />
      password:
      <input onChange={(e) => setpassword(e.target.value)} />
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  );
};

export default Login;
