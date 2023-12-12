import Game from "../app/game/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Game page", () => {
  it("renders game page", () => {
    render(<Game />);
    expect(screen.getByTestId("game")).toBeInTheDocument();
  });
});
