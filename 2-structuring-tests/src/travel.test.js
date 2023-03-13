import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Travel from "./travel";

it("renders travel component", () => {
  const { container } = render(<Travel />);
  expect(container).toMatchInlineSnapshot(`
<div>
  <div>
    snapshot
  </div>
</div>
`);
});
