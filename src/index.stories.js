import React from 'react';
import { Button } from '@storybook/react/demo';
import './.storybook/button-primary.stories';
import './components/card-item/card-item.stories';
import "./components/form-input/form-input.stories";
export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

