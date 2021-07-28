import gameSettings from "./gameSettings";
import * as actions from "../actions/gameSettings";
import { initialState } from "./gameSettings";

describe("gameSettings reducer", () => {
  it("should handle initial state", () => {
    expect(gameSettings(undefined, {})).toEqual(initialState);
  });

  it("should handle UPDATE_PLAYER_NUMBER", () => {
    expect(
      gameSettings([], {
        type: actions.UPDATE_PLAYER_NUMBER,
        value: 2,
      })
    ).toEqual({
      playerNumber: 2,
    });
  });
});
