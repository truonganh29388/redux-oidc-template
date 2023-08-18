import { render } from '@testing-library/react';
import store from 'app/store';
import { Provider } from 'react-redux';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
