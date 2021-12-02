import * as React from 'react';

import { Menu, MenuItem, MenuList, MenuPopover, MenuTrigger } from '@fluentui/react-menu';
import { SplitButton, MenuButtonProps } from '../../../index'; // codesandbox-dependency: @fluentui/react-button ^9.0.0-beta

export const Block = () => (
  <Menu positioning="below-end">
    <MenuTrigger>
      {(triggerProps: MenuButtonProps) => (
        <SplitButton menuButton={triggerProps} primaryActionButton={'This is a split button'} block />
      )}
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItem>Item a</MenuItem>
        <MenuItem>Item b</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);
Block.parameters = {
  docs: {
    description: {
      story: 'A split button can fill the width of its container.',
    },
  },
};
