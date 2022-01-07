import * as React from 'react';
import {
  Menu,
  MenuTrigger,
  MenuList,
  MenuItemRadio,
  MenuItemCheckbox,
  MenuGroup,
  MenuDivider,
  MenuGroupHeader,
  MenuPopover,
} from '../index';

import { Button } from '@fluentui/react-button';
import {
  CutRegular as CutIcon,
  ClipboardPasteRegular as PasteIcon,
  EditRegular as EditIcon,
} from '@fluentui/react-icons';

export const SelectionGroup = () => (
  <Menu>
    <MenuTrigger>
      <Button>Toggle menu</Button>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuGroup>
          <MenuGroupHeader>Checkbox group</MenuGroupHeader>
          <MenuItemCheckbox secondaryContent="Ctrl+N" icon={<CutIcon fontSize={20} />} name="edit" value="cut">
            Show Menu Bar
          </MenuItemCheckbox>
          <MenuItemCheckbox
            secondaryContent="Ctrl+Shift+N"
            icon={<PasteIcon fontSize={20} />}
            name="edit"
            value="paste"
          >
            Show Side Bar
          </MenuItemCheckbox>
          <MenuItemCheckbox secondaryContent="Ctrl+Shift+O" icon={<EditIcon fontSize={20} />} name="edit" value="edit">
            Show Status Bar
          </MenuItemCheckbox>
          <MenuItemCheckbox disabled icon={<EditIcon fontSize={20} />} name="disabled" value="disabled">
            Show Debug Panel
          </MenuItemCheckbox>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuGroupHeader>Radio group</MenuGroupHeader>
          <MenuItemRadio secondaryContent="Ctrl+N" icon={<CutIcon fontSize={20} />} name="font" value="segoe">
            Segoe
          </MenuItemRadio>
          <MenuItemRadio secondaryContent="Ctrl+Shift+N" icon={<PasteIcon fontSize={20} />} name="font" value="calibri">
            Caliri
          </MenuItemRadio>
          <MenuItemRadio secondaryContent="Ctrl+Shift+N" icon={<EditIcon fontSize={20} />} name="font" value="arial">
            Arial
          </MenuItemRadio>
        </MenuGroup>
      </MenuList>
    </MenuPopover>
  </Menu>
);

SelectionGroup.parameters = {
  docs: {
    description: {
      story: [
        'Both menu item checkboxes and radio items can be used in the same menu surface.',
        'Different selection areas should be grouped to provide clear expectations for users.',
      ].join('\n'),
    },
  },
};
