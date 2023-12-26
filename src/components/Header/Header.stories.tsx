import React from 'react';
import { Meta, Story, StoryObj } from '@storybook/react';
import Header, { IHeaderProps } from './index';

export default {
  title: 'Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Компонент Header',
      },
    },
  },
  tags: ['autodocs']
} as Meta;

export const  Default:StoryObj = (args:IHeaderProps) => <Header {...args}/>
Default.args = {
  style: { border: '1px solid #10002b' },
  children: null,
};

Default.parameters = {
  docs: {
    source: {
      code: `
        <Header/>`,
    },
  },
};
