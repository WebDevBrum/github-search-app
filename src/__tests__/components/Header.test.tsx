import React, { useReducer } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../../components/Header";
import App from "../../App";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  const props = {
    mode: "light",
    dispatch: jest.fn(),
  };

  it("renders a header with the correct text", () => {
    render(<Header {...props} />);
    const header = screen.getByRole("heading", { name: /devfinder/i });

    expect(header).toHaveTextContent(/devfinder/i);
  });

  it("calls the correct dispatch when clicking the mode in light mode button", () => {
    const mockDispatch = jest.fn();

    render(<Header mode="light" dispatch={mockDispatch} />);
    const button = screen.getByRole("button", { name: /dark/i });

    userEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update-mode",
      payload: "dark",
    });

    // expect(button).toHaveTextContent("LIGHT");
  });

  it("calls the correct dispatch when clicking the mode in dark mode button", () => {
    const mockDispatch = jest.fn();

    render(<Header mode="dark" dispatch={mockDispatch} />);
    const button = screen.getByRole("button", { name: /light/i });

    userEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update-mode",
      payload: "light",
    });
  });

  it("changes the theme to dark when clicking the mode button and then changes back to light when clicking again", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /dark/i });

    userEvent.click(button);

    expect(button.textContent).toBe("LIGHT");

    userEvent.click(button);

    expect(button.textContent).toBe("DARK");
  });
});
