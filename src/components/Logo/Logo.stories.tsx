import React, { SVGProps } from 'react';
import { Story, Meta, StoryObj } from '@storybook/react';
import Logo from './index';

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: 'Компонент Logo',
      },
    },
  },
  tags: ['autodocs']
} as Meta;

export const Default:StoryObj<SVGProps<SVGElement>> = (args: SVGProps<SVGElement>) => <Logo {...args}/>
Default.args = {
  height:60,
  width:60
} as SVGProps<SVGElement>;  