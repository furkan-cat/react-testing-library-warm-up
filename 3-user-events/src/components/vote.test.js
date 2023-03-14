import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Vote from "./vote";

test("increases total likes by one", async () => {
  render(<Vote totalGlobalLikes={10} />);

  const user = userEvent.setup();
  const btn = screen.getByRole("button", { name: /thumbs up/i });

  expect(screen.getByText(/10/i)).toBeInTheDocument();

  await user.click(btn);
  expect(screen.getByText(/11/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /thumbs up/i })).toHaveStyle(
    "background: green"
  );
});

test("decreases total likes by one", async () => {
  render(<Vote totalGlobalLikes={10} />);

  const user = userEvent.setup();
  const btn = screen.getByRole("button", { name: /thumbs down/i });

  expect(screen.getByText(/10/i)).toBeInTheDocument();

  await user.click(btn);
  expect(screen.getByText(/9/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /thumbs down/i })).toHaveStyle(
    "background: red"
  );
});

test("a user can only vote once", async () => {
  render(<Vote totalGlobalLikes={10} />);
  const user = userEvent.setup();
  const thumbsUpBtn = screen.getByRole("button", { name: /thumbs up/i });
  const thumbsDownBtn = screen.getByRole("button", { name: /thumbs down/i });
  expect(screen.getByText(/10/i));

  await user.click(thumbsUpBtn);
  await user.click(thumbsUpBtn);
  expect(screen.getByText(/11/i));

  await user.click(thumbsDownBtn);
  expect(screen.getByText(/11/i));
});
