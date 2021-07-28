import * as actions from "./game";
import { storeMock } from "../../__tests__/store/store";

describe("todo actions", () => {
  it("setGamePlayers should create UPDATE_GAME_PLAYERS action", () => {
    expect(actions.setGamePlayers(storeMock.game.players)).toEqual({
      type: actions.UPDATE_GAME_PLAYERS,
      value: storeMock.game.players,
    });
  });
});
