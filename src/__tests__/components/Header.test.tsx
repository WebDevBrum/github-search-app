import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";
import userEvent from "@testing-library/user-event";
import ItemsProvider, { ItemsContext } from "../../context";

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

  it("clicking the theme button changes the theme", () => {
    render(
      <ItemsProvider>
        <Header />
      </ItemsProvider>
    );
    const button = screen.getByRole("button", { name: /dark/i });

    expect(button.textContent).toBe("DARK");

    userEvent.click(button);

    expect(button.textContent).toBe("LIGHT");

    userEvent.click(button);

    expect(button.textContent).toBe("DARK");
  });
});
