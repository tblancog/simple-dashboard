import UserListItem from "components/UserListItem";
import { render, screen } from "@testing-library/react";
import React from "react";

it("Should render list component", () => {
  render(<UserListItem item={"some-user"} isOnline={true} />);
  expect(screen.getByRole("list") instanceof HTMLUListElement).toBe(true);
});

it('Should render "some-user" and svg circle', () => {
  render(<UserListItem item={"some-user"} isOnline={true} />);
  expect(screen.getByRole("presentation") instanceof SVGSVGElement).toBe(true);
});
