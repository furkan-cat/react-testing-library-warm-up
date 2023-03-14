import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Employee from "./employee";

test("it accepts a username and displays to the screen", async () => {
  render(<Employee />);
  const input = screen.getByRole("textbox", { name: /enter your name/i });
  await userEvent.type(input, "john doe");
  expect(screen.getByText(/john.doe@software-plus.com/i)).toBeInTheDocument();
});
