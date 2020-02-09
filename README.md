# react-collapsable-menu

Collapsable Menu Component

## Installation
```bash
# yarn
yarn add @cemderin/react-collapsable-menu

# npm
npm install @cemderin/react-collapsable-menu
```

## Usage

```jsx
import React from 'react';
import {Menu, Item} from '@cemderin/react-collapsable-menu';

const Demo = () => {
  return <React.Fragment>
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

      <hr />

      <Menu stacked>
        <Item>Home</Item>
        <Item>About Us</Item>
        <Item active>Careers</Item>
        <Item>Contact</Item>
      </Menu>

      <hr />

      <Menu stacked collapsed>
        <Item>Home</Item>
        <Item>About Us</Item>
        <Item active>Careers</Item>
        <Item>Contact</Item>
      </Menu>
  </React.Fragment>
}

export default Demo;
```
## Changelog
Please see [CHANGELOG.md](./CHANGELOG.md).

## License
MIT

## Develpoment
Please see [DEVELOPMENT.md](./DEVELOPMENT.md).