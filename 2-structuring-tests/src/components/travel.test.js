import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Travel from "./travel";

it("renders travel component", () => {
  const { container } = render(<Travel />);
  expect(container).toMatchInlineSnapshot(`
<div>
  <div
    style="width: 18rem;"
  >
    <i
      style="font-size: 4rem;"
    >
      airplanemode_active
    </i>
    <h4>
      Travel Anywhere
    </h4>
    <p>
      Our premium package allows you to take exotic trips anywhere at the cheapest prices!
    </p>
  </div>
</div>
`);
});
