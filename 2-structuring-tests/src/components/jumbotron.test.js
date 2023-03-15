import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Jumbotron from "./jumbotron";

it("renders jumbotron component", () => {
  render(<Jumbotron />);
  const headingElement = screen.getByRole("heading", {
    name: /welcome to our site!/i,
  });
  expect(headingElement).toBeInTheDocument();
});
