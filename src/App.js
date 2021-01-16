// import logo from './logo.svg';
// import './App.css';
import Input from "./components/input";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginInput = (event) => {
    event.preventDefault();
    console.log("handling input of login ");
    console.log(event.target.value);
    console.log("handling input of login ");
    setLogin(event.target.value);
  };
  const handlePasswordInput = (event) => {
    event.preventDefault();
    console.log("handling input of password ");
    console.log(event.target.value);
    console.log("handling input of password ");
    setPassword(event.target.value);
  };

  const Welcome = () => {
    return (
      <div>
        <h1>Welcome</h1>
      </div>
    );
  };

  return (
    <div>
      <Welcome />
      <Input
        handler={handleLoginInput}
        id={"loginField"}
        placeholder="mock@mail.dev"
        type="text"
        name="loginField"
        label="loginField"
      />
      <Input
        handler={handlePasswordInput}
        id={"passwordField"}
        placeholder=""
        type="password"
        name="passwordField"
        label="passwordField"
      />
      <Button />
      <Button />
      <br />
      <div>login: {login}</div>
      <div>password: {password}</div>
    </div>
  );
}

export default App;
