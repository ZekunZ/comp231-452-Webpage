import Home from "../app/page";
import "@testing-library/jest-dom";
import { render, screen, waitFor, act } from "@testing-library/react";

describe("Home page", () => {
  it("renders home page", () => {
    render(<Home />);
    expect(screen.getByText("Welcome to Dice of Fate")).toBeInTheDocument();
    expect(screen.getByText("Enter the game")).toBeInTheDocument();
  });
});
