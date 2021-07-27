import * as actions from "./gameSettings";

describe("todo actions", () => {
  it("addTodo should create ADD_TODO_TEST action", () => {
    expect(actions.addTodo("Use Redux")).toEqual({
      type: "ADD_TODO_TEST",
      text: "Use Redux",
    });
  });
});
