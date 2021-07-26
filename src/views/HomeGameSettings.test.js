import { render, screen } from '@testing-library/react';
import HomeGameSettings from './HomeGameSettings';
import {createReduxStore} from '../store';
import { Provider } from 'react-redux';

test('renders learn react link', () => {
  render(<Provider store={createReduxStore()}><HomeGameSettings /></Provider>);
  const linkElement = screen.getByText(/First page - select game settings/i);
  expect(linkElement).toBeInTheDocument();
});
