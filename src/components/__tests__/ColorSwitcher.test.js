import ColorSwitcher from "components/ColorSwitcher";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };
const mockColorState = {
  colorMode: "dark",
  toggleColorMode: jest.fn(),
};
it("Renders component", () => {
  const { baseElement } = render(<ColorSwitcher colorState={mockColorState} />);
  expect(baseElement instanceof HTMLBodyElement).toBeTruthy();
});
