import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    checkbox: false,
    disabled: true,
  });

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    if (e.target.name === "checkbox") {
      setInput({ ...input, checkbox: e.target.checked });
    }
  }
  console.log(input.checkbox);

  function isFormValid() {
    return input.username && input.password && input.checkbox;
  }

  function handleSubmit() {}

  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="username-field">username</label>
        <input
          id="username-field"
          type="text"
          name="username"
          value={input.username}
          onChange={handleChange}
        />

        <label htmlFor="password-field">password</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="password"
          checked={input.password}
          onChange={handleChange}
        />

        <input
          type="checkbox"
          name="checkbox"
          value={input.checkbox}
          onChange={handleChange}
        />
        <button type="submit" disabled={!isFormValid()} onClick={handleSubmit}>
          Login
        </button>
      </header>
    </div>
  );
}

export default App;
