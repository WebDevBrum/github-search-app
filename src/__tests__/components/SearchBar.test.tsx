import { render, screen } from "@testing-library/react";
import SearchBar from "../../components/SearchBar";
import userEvent from "@testing-library/user-event";
import ItemsProvider, { ItemsContext } from "../../context";

describe("Search", () => {
  test("its should call the dispatch function on the clicking search", () => {
    const mockDispatch = jest.fn();

    render(
      <ItemsContext.Provider
        value={{
          mode: "light",
          dispatch: mockDispatch,
          query: "helloo",
          url: "",
          error: false,
        }}
      >
        <SearchBar />
      </ItemsContext.Provider>
    );

    const button = screen.getByRole("button", { name: /search/i });

    userEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update-url",
      payload: `https://api.github.com/users/helloo`,
    });

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  test("its should call the dispatch function on the clicking enter", () => {
    const mockDispatch = jest.fn();

    render(
      <ItemsContext.Provider
        value={{
          mode: "light",
          dispatch: mockDispatch,
          query: "helloo",
          url: "",
          error: false,
        }}
      >
        <SearchBar />
      </ItemsContext.Provider>
    );

    const input = screen.getByRole("textbox");

    userEvent.type(input, "{enter}");

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update-url",
      payload: `https://api.github.com/users/helloo`,
    });

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  test("its should call the dispatch function and update the query on type", async () => {
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
        <SearchBar />
      </ItemsContext.Provider>
    );

    const input = screen.getByRole("textbox");

    userEvent.type(input, "a");

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update-query",
      payload: "a",
    });

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
