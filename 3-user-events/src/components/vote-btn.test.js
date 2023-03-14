import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import VoteBtn from "./vote-btn";
import thumbsUp from "../images/thumbs-up.svg";

test("invokes handleVote", async () => {
  const mockHandleVote = jest.fn();
  render(
    <VoteBtn
      handleVote={mockHandleVote}
      hasVoted={false}
      altText="vote like"
      imgSrc={thumbsUp}
    />
  );

  const btn = screen.getByRole("button", { name: /vote like/i });
  await userEvent.click(btn);

  expect(mockHandleVote).toHaveBeenCalled(); // mockHandleVote called
  expect(mockHandleVote).toHaveBeenCalledTimes(1); // mockHandleVote called once
});
