// import logo from './logo.svg';
// import './App.css';
import Input from "./components/input";
import Button from "./components/Button";
import { useState } from "react";
import logToConsole from "./helper/helpers";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginInput = (event) => {
    event.preventDefault();
    logToConsole(event.target.value, "login");
    setLogin(event.target.value);
  };
  const handlePasswordInput = (event) => {
    event.preventDefault();
    logToConsole(event.target.value, "password");
    setPassword(event.target.value);
  };

  const loginHandler = () => {
    console.log("somthing will happen here login");
  };
  const registerHandler = () => {
    console.log("somthing will happen here register");
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
        type="password"
        name="passwordField"
        label="passwordField"
      />
      <Button
        handler={loginHandler}
        value="login"
        id="loginButton"
        type="button"
        name="loginButton"
        label="loginButton"
      />
      <Button
        handler={registerHandler}
        value="register"
        id="loginButton"
        type="button"
        name="loginButton"
        label="loginButton"
      />
      <br />
      <div>login: {login}</div>
      <div>password: {password}</div>
    </div>
  );
}

export default App;
