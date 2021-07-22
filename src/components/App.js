// $FlowFixMe
import '../App.css';
import { useDispatch } from 'react-redux';
import {addTodo} from '../actions/gameSettings';

const App = () => {
  const dispatch = useDispatch();
  function sub(x: ?string): string {
    if (x) {
      return x;
    }
    return "default string";
  }
  return (
    <div className="App">
      <header className="App-header">
        {sub('nemanja')}
        <button type="button" onClick={() => dispatch(addTodo('nemanjaa'))}>Click Me!</button>

      </header>
    </div>
  );
}

export default App;
