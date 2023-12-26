import React, { FC, ChangeEvent, useState } from 'react';
import ShoppingCartButton, { IShoppingCartButtonProps } from './index';
import { Meta, Story } from '@storybook/react';



export default {
  title: 'Кнопка добавить в коризну',
  component: ShoppingCartButton,
  argTypes: {
    count: {
      control: { type: 'number' },
    },
    disabled: {
      control: { type: 'boolean'}
    }
  },
} as Meta;

const Template: Story<IShoppingCartButtonProps> = (args:IShoppingCartButtonProps) => {
  const [count, setCount] = useState(args.count);
  return <ShoppingCartButton {...args} count={count} setCount={setCount} />;
};

export const Default = Template.bind({});
Default.args = {
  count: 0
} as IShoppingCartButtonProps;
