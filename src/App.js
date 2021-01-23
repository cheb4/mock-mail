import "./App.css";
import { useState } from "react";
import Welcome from "./pages/welcome";
import Main from "./pages/main/main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Router>
      <div>
        <Route exact path="/">
          <Welcome
            login={login}
            setLogin={setLogin}
            password={password}
            setPassword={setPassword}
          />
        </Route>
        <Route exact path="/main">
          <Main />
        </Route>
      </div>
    </Router>
  );
}

export default App;
