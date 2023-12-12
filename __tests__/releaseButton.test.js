import NavBar from "../components/NavBar";
import "@testing-library/jest-dom";
import { render, screen, waitFor, act } from "@testing-library/react";

describe("Nav bar", () => {
  it("click release schedule button and show modal", async () => {
    render(<NavBar />);
    const releaseScheduleButton = screen.getByTestId("release-schedule");
    await act(async () => {
      releaseScheduleButton.click();
    });
    await waitFor(() => {
      expect(
        screen.getByText("Our important release dates")
      ).toBeInTheDocument();
    });
  });
});
