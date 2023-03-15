import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Register from "./register";

test("given submitted form, invokes handleRegister", async () => {
  const mockHandleRegister = jest.fn();
  const user = userEvent.setup();
  const mockValues = {
    email: "asdasd@mail.com",
    password: "asdasd",
  };

  render(<Register handleRegister={mockHandleRegister} />);

  await user.type(
    screen.getByRole("textbox", { name: /Email Address/i }),
    mockValues.email
  );
  await user.type(
    screen.getByLabelText(/Create Password/i),
    mockValues.password
  );
  await user.click(screen.getByRole("button", { name: /submit/i }));

  expect(mockHandleRegister).toHaveBeenCalledWith({
    email: mockValues.email,
    password: mockValues.password,
  });
  expect(mockHandleRegister).toHaveBeenCalledTimes(1);
});
