import "./App.css";
// import { useState } from "react";
// import Welcome from "./pages/welcome";
import Main from "./pages/main/main";
function App() {
  // const [login, setLogin] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <div>
      {/* <Welcome
        login={login}
        setLogin={setLogin}
        password={password}
        setPassword={setPassword}
      /> */}
      <Main />
    </div>
  );
}

export default App;
