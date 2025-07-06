import React from "react";
import "@testing-library/jest-dom";
import Career from "./Career";
import { fireEvent, render, screen } from "@testing-library/react";

test("career component", () => {
  render(<Career />);
  const inputElement = screen.getByPlaceholderText("enter your name here");
  expect(inputElement).toBeInTheDocument();
  fireEvent.change(inputElement, { target: { value: "Alice" } });
});
