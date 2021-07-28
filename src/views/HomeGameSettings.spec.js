import { render, screen } from "@testing-library/react";
import HomeGameSettings from "./HomeGameSettings";
import { store } from "../store";
import { Provider } from "react-redux";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <HomeGameSettings />
    </Provider>
  );
  const linkElement = screen.getByText(/Choose game settings/i);
  expect(linkElement).toBeInTheDocument();
});
