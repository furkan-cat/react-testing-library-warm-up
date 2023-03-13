import { useReducer } from "react";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(formReducer, {
    username: "",
    password: "",
    checkbox: false,
  });

  function formReducer(state, action) {
    const { type, payload } = action;
    switch (type) {
      case "USERNAME":
        return { ...state, username: payload };
      case "PASSWORD":
        return { ...state, password: payload };
      case "CHECKBOX":
        return { ...state, checkbox: payload };
      default:
        return state;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }

  return (
    <div className="App">
      <form data-testid="form" onSubmit={handleSubmit}>
        <label htmlFor="username-field">username</label>
        <input
          id="username-field"
          type="text"
          name="username"
          value={state.username}
          onChange={(e) =>
            dispatch({ type: "USERNAME", payload: e.target.value })
          }
        />

        <label htmlFor="password-field">password</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="password"
          checked={state.password}
          onChange={(e) =>
            dispatch({ type: "PASSWORD", payload: e.target.value })
          }
        />

        <input
          type="checkbox"
          name="checkbox"
          value={state.checkbox}
          onChange={(e) =>
            dispatch({ type: "CHECKBOX", payload: e.target.checked })
          }
        />
        <button
          type="submit"
          disabled={
            state.username && state.password && state.checkbox ? false : true
          }
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
