import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "./table";
import fakeEmployees from "../mocks/employees";

it("renders travel component, checks props passed and rendered correctly", () => {
  render(<Table employees={fakeEmployees} />);
  expect(screen.getByRole('cell', { name: /john smith/i })).toBeInTheDocument();
  expect(screen.getByRole('cell', { name: /engineering/i })).toBeInTheDocument();
  expect(screen.getByRole('cell', { name: /designer/i })).toBeInTheDocument();
  expect(screen.getByRole("table")).toHaveAttribute("class", "table");
});
