import React, { FC, ChangeEvent, useState } from 'react';
import ShoppingCartButton, { IShoppingCartButtonProps } from './index';
import { Meta, Story } from '@storybook/react';



export default {
  title: 'ShoppingCartButton',
  component: ShoppingCartButton,
  argTypes: {
    count: {
      control: { type: 'number' },
    },
  },
} as Meta;

const Template: Story<IShoppingCartButtonProps> = (args:IShoppingCartButtonProps) => {
  const [count, setCount] = useState(args.count);

  const handleCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/[^\d]/g, '');
    setCount(Number(newValue));
  };

  return <ShoppingCartButton {...args} count={count} setCount={setCount} />;
};

export const Default = Template.bind({});
Default.args = {
  count: 0
} as IShoppingCartButtonProps;
