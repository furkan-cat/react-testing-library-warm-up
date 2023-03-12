import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";

test("Login, given credentials, returns enabled submit button", () => {
  render(<App />);
  const username = screen.getByRole("textbox");
  const password = screen.getByLabelText(/password/i);
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button", { name: "Login" });
  const mock = {
    username: "furkan",
    password: "545556",
  };

  fireEvent.change(username, { target: { value: mock.username } });
  fireEvent.change(password, { target: { value: mock.password } });
  fireEvent.click(checkbox);
  expect(button.hasAttribute("disabled")).toBe(false);
});
