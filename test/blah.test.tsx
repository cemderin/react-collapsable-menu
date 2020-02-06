import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Menu } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Menu />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
