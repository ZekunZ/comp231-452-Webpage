import "@testing-library/jest-dom";
import { render, screen, act, waitFor } from "@testing-library/react";
import Request from "../app/request/page";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("Request page", () => {
  it("renders request page", () => {
    render(<Request />);
    expect(screen.getByText("Your Request")).toBeInTheDocument();
    expect(screen.getByText("The cost for your request")).toBeInTheDocument();
    expect(screen.getByText("Credit Card")).toBeInTheDocument();
  });

  it("payment form validation", async () => {
    render(<Request />);
    const payButton = screen.getByRole("button");
    await act(async () => {
      payButton.click();
    });
    await waitFor(() => {
      expect(screen.getByText("Card number is required.")).toBeInTheDocument();
      expect(
        screen.getByText("Expiration date is required.")
      ).toBeInTheDocument();
      expect(screen.getByText("CVV is required.")).toBeInTheDocument();
      expect(screen.getByText("Full name is required.")).toBeInTheDocument();
    });
  });
});
