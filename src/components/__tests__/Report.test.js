import React from "react";
import { render, screen } from "@testing-library/react";
import Report from "components/routes/Report";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import * as helpers from "../../helpers";

// This is necessary because otherwise if will fail when implementing window.location: assign and href properties
const mockResponse = jest.fn();
Object.defineProperty(window, "location", {
  value: {
    hash: {
      endsWith: mockResponse,
      includes: mockResponse,
    },
    assign: mockResponse,
  },
  writable: true,
});

it("Renders report page", () => {
  render(<Report />);
  expect(
    screen.getByRole("heading", { name: "Export CSV file" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Export CSV" })
  ).toBeInTheDocument();
});

it("Should show 'Download started!' after button is clicked", () => {
  const mockDownload = jest.spyOn(helpers, "downloadCsv");
  render(<Report />);
  expect(
    screen.getByRole("button", { name: "Export CSV" })
  ).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: "Export CSV" }));

  expect(screen.getByText("Download started!")).toBeInTheDocument();
  expect(mockDownload).toHaveBeenCalledTimes(1);
});
