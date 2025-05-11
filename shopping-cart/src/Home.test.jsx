import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";

test("test input", () => {
  render(<Home />);
  const inputElement = screen.getByPlaceholderText("my name here");
  expect(inputElement).toBeInTheDocument();
});

test("test click", () => {
  render(<Home />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Click me 1");
});
