import * as actions from "./gameSettings";

describe("Game Settings actions", () => {
  it("updateNumberOfPlayers should create UPDATE_PLAYER_NUMBER action", () => {
    expect(actions.updateNumberOfPlayers(2)).toEqual({
      type: actions.UPDATE_PLAYER_NUMBER,
      value: 2,
    });
  });
});
