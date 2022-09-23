import App from "./App";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };
it("Renders component", () => {
  render(<App />);
  const [heading] = screen.getAllByRole("heading");
  expect(heading.textContent).toMatch(/Hello/);
});

it("Renders headings of home section", () => {
  render(<App />);
  const [first, second, third, fourth, fifth] = screen.getAllByRole("heading");
  expect(first.textContent).toEqual("Hello John");
  expect(second.textContent).toEqual("Pod Online Status");
  expect(third.textContent).toEqual("Total Deliveries");
  expect(fourth.textContent).toEqual("Total Time in Pod");
  expect(fifth.textContent).toEqual("Total Users");
});
