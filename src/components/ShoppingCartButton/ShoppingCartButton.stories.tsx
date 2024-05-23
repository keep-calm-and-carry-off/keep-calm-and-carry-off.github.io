import React, { useState } from 'react';
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
      control: { type: 'boolean' }
    }
  },
} as Meta;

const Template: Story<IShoppingCartButtonProps> = (args: IShoppingCartButtonProps) => {
  return (
    <div style={{width:'200px'}}>
      <ShoppingCartButton productId='1' />
    </div>

  )
};

export const Default = Template.bind({});
Default.args = {
  productId: '1'
} as IShoppingCartButtonProps;
