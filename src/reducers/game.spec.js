import game from "./game";
import * as actions from "../actions/game";
import { initialState } from "./game";
import { storeMock } from "../../__tests__/store/store";

describe("gameSettings reducer", () => {
  it("should handle initial state", () => {
    expect(game(undefined, {})).toEqual(initialState);
  });

  it("should handle UPDATE_GAME_PLAYERS", () => {
    expect(
      game([], {
        type: actions.UPDATE_GAME_PLAYERS,
        value: storeMock.game.players,
      })
    ).toEqual({ players: storeMock.game.players });
  });
});
