import { render, screen } from "@testing-library/react";
import Game from "./Game";
import { createReduxStore } from "../store";
import { Provider } from "react-redux";

test("renders learn react link", () => {
  render(
    <Provider store={createReduxStore()}>
      <Game />
    </Provider>
  );
  const linkElement = screen.getByText(/Game started/i);
  expect(linkElement).toBeInTheDocument();
});
