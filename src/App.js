import { useState } from "react";
import Welcome from "./welcome";
function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Welcome
        login={login}
        setLogin={setLogin}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
}

export default App;
