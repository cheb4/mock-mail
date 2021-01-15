// import logo from './logo.svg';
// import './App.css';
import Input from "./input";
import Button from "./Button";
function App() {
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
      <Input />
      <Input />
      <Button />
      <Button />
    </div>
  );
}

export default App;
