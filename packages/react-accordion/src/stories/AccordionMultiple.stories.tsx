import * as React from 'react';

import { AccordionItem, AccordionHeader, AccordionPanel, Accordion, AccordionProps } from '@fluentui/react-accordion';

export const Multiple = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionItem value="1">
      <AccordionHeader>Accordion Header 1</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 1</div>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionHeader>Accordion Header 2</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 2</div>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="3">
      <AccordionHeader>Accordion Header 3</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 3</div>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

Multiple.args = {
  multiple: true,
} as AccordionProps;

Multiple.parameters = {
  docs: {
    description: {
      story: 'An accordion supports multiple panels expanded simultaneously.',
    },
  },
};
