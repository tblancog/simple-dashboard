import StatCard from "components/StatCard";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

const statCardTestProps = {
  title: "Some title",
  bodyText: "Some body text",
  footerText: "Some footer text",
  bg: "green",
};
it("Renders component with Props", () => {
  render(<StatCard {...statCardTestProps} />);
  expect(
    screen.getByRole("heading", { name: "Some title" })
  ).toBeInTheDocument();
  expect(screen.getByText("Some body text")).toBeInTheDocument();
  expect(screen.getByText("Some footer text")).toBeInTheDocument();
});

it("Should contain select control with 3 options with first one selected", () => {
  render(<StatCard {...statCardTestProps} />);

  expect(screen.getByRole("option", { name: "Last Week" }).selected).toBe(true);
  expect(screen.getAllByRole("option").length).toBe(3);
});

it("Should be able to pick element from dropdown", () => {
  render(<StatCard {...statCardTestProps} />);

  userEvent.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "Last Month" })
  );
  expect(screen.getByRole("option", { name: "Last Month" }).selected).toBe(
    true
  );
});
