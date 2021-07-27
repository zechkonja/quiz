import { render, screen } from "@testing-library/react";
import App from "./App";
import { createReduxStore } from "../store";
import { Provider } from "react-redux";

test("renders learn react link", () => {
  render(
    <Provider store={createReduxStore()}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/nemanja/i);
  expect(linkElement).toBeInTheDocument();
});
