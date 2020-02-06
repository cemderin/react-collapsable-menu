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
      <Item>Inactive</Item>
      <Item active>Active</Item>
    </Menu>

    <Menu collapsed>
      <Item>Inactive</Item>
      <Item active>Active</Item>
    </Menu>
  </React.Fragment>
}

export default Demo;
```

## License
MIT

## Develpoment
Please see [development document](./DEVELOPMENT.md).