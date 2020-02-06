import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Menu, Item} from '../.'

const App = () => {
  return (
    <div>
      <Menu>
        <Item>Home</Item>
        <Item>About Us</Item>
        <Item active>Careers</Item>
        <Item>Contact</Item>
      </Menu>

      <hr />
      <Menu collapsed>
        <Item>Home</Item>
        <Item>About Us</Item>
        <Item active>Careers</Item>
        <Item>Contact</Item>
      </Menu>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
