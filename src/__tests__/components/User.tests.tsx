import React from "react";
import { act, render, screen } from "@testing-library/react";
import User from "../../components/User";
import ItemsProvider, { ItemsContext } from "../../context";

describe("User component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render the user details on fetch", async () => {
    const mockUser = {
      name: "John Doe",
      bio: "Lorem ipsummmmmm",
      login: "im a login",
      followers: 100,
      following: 50,
      location: "London",
      twitter_username: "johndoe",
    };

    const mockResponse = new Response(JSON.stringify(mockUser), {
      status: 200,
      headers: {
        "Content-type": "application/json",
      },
    });

    jest.spyOn(global, "fetch").mockResolvedValue(mockResponse);

    render(
      <ItemsProvider>
        <User />
      </ItemsProvider>
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const header = screen.getByRole("heading", { name: /john doe/i });

    expect(header).toHaveTextContent(/john doe/i);

    // expect(screen.getByText("John Doe")).toBeInTheDocument();
    // expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
    // expect(screen.getByText('100 followers')).toBeInTheDocument();
    // expect(screen.getByText('50 following')).toBeInTheDocument();
    // expect(screen.getByText('London')).toBeInTheDocument();
    // expect(screen.getByText('@johndoe')).toBeInTheDocument();
  });

  //   it("should handle error when fetching user details", () => {
  //     const mockDispatch = jest.fn();

  //     const mockContextValue = {
  //       url: "",
  //       mode: "light",
  //       dispatch: mockDispatch,
  //     };

  //     render(
  //       <ItemsContext.Provider value={mockContextValue}>
  //         <User />
  //       </ItemsContext.Provider>
  //     );

  //     screen.debug();
  //     // expect(getByText('This profile has no bio')).toBeInTheDocument();
  //   });
});
