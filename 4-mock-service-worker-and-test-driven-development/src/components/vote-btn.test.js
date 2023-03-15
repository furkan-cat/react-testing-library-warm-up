import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import VoteBtn from "./vote-btn";
import thumbsUp from "../images/thumbs-up.svg";
import userEvent from "@testing-library/user-event";

test("given image and vote status, renders button to screen", () => {
  const mockHandleVote = jest.fn();
  const mockAltText = "vote like";

  render(
    <VoteBtn
      handleVote={mockHandleVote}
      hasVoted={false}
      imgSrc={thumbsUp}
      altText={mockAltText}
    />
  );

  const btn = screen.getByRole("button", { name: mockAltText });
  const img = screen.getByRole("img", { name: mockAltText });

  expect(btn).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(btn).toBeEnabled();
});

test("given clicked button, invokes handleVote", async () => {
  const mockHandleVote = jest.fn();
  const mockAltText = "vote like";

  render(
    <VoteBtn
      handleVote={mockHandleVote}
      hasVoted={false}
      imgSrc={thumbsUp}
      altText={mockAltText}
    />
  );
  const user = userEvent.setup();
  await user.click(screen.getByRole("button", { name: mockAltText }));

  expect(mockHandleVote).toHaveBeenCalled();
  expect(mockHandleVote).toHaveBeenCalledTimes(1);
});
