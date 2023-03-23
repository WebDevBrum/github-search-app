import React, { useReducer } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../../components/Header";
import App from "../../App";
import userEvent from "@testing-library/user-event";
import { ItemsContext } from "../../context";

describe("Header", () => {
  //   const props = {
  //     mode: "light",
  //     dispatch: jest.fn(),
  //   };

  it("renders a header with the correct text", () => {
    render(<Header />);
    const header = screen.getByRole("heading", { name: /devfinder/i });

    expect(header).toHaveTextContent(/devfinder/i);
  });

  it("calls the correct dispatch when clicking the mode in light mode button", () => {
    const mockDispatch = jest.fn();

    render(
      <ItemsContext.Provider
        value={{
          mode: "light",
          dispatch: mockDispatch,
          query: "",
          url: "",
          error: false,
        }}
      >
        <Header />
      </ItemsContext.Provider>
    );
    const button = screen.getByRole("button", { name: /dark/i });

    userEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update-mode",
      payload: "dark",
    });
  });

  it("calls the correct dispatch when clicking the mode in dark mode button", () => {
    const mockDispatch = jest.fn();

    render(
      <ItemsContext.Provider
        value={{
          mode: "dark",
          dispatch: mockDispatch,
          query: "",
          url: "",
          error: false,
        }}
      >
        <Header />
      </ItemsContext.Provider>
    );
    const button = screen.getByRole("button", { name: /light/i });

    userEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update-mode",
      payload: "light",
    });
  });

  it("changes the theme to dark when clicking the mode button and then changes back to light when clicking again", () => {
    let mode = "light";

    const testDispatch = jest.fn((action) => {
      // Update the mode state based on the action payload
      if (action.type === "update-mode") {
        mode = action.payload;
      }
    });

    render(
      <ItemsContext.Provider
        value={{
          mode: mode,
          dispatch: testDispatch,
          query: "",
          url: "",
          error: false,
        }}
      >
        <App />
      </ItemsContext.Provider>
    );

    expect(mode).toBe("light");

    let button = screen.getByRole("button", { name: /dark/i });

    userEvent.click(button);

    expect(mode).toBe("dark");
    expect(testDispatch).toHaveBeenCalledWith({
      payload: "dark",
      type: "update-mode",
    });

    render(
      <ItemsContext.Provider
        value={{
          mode: mode,
          dispatch: testDispatch,
          query: "",
          url: "",
          error: false,
        }}
      >
        <Header />
      </ItemsContext.Provider>
    );
    button = screen.getByRole("button", { name: /light/i });

    expect(button.textContent).toBe("LIGHT");

    userEvent.click(button);

    expect(mode).toBe("light");
    expect(testDispatch).toHaveBeenCalledWith({
      payload: "light",
      type: "update-mode",
    });
  });
});
