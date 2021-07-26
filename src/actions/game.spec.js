import * as actions from './game';

describe('todo actions', () => {
  it('addTodo should create GAME_ADD_TODO_TEST action', () => {
    expect(actions.addGame('Use Redux')).toEqual({
      type: 'GAME_ADD_TODO_TEST',
      text: 'Use Redux'
    })
  })
})
