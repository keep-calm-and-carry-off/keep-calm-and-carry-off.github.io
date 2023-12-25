import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Layout, { ILayout } from './index';

export default {
  title: 'Layout',
  component: Layout,
  parameters: {
    docs: {
      description: {
        component: 'Компонент Layout',
      },
    },
  },
  tags: ['autodocs']
} as Meta;

export const  Default:StoryObj = (args:ILayout) => <Layout {...args}/>
Default.args = {
  children: null,
};

Default.parameters = {
  docs: {
    source: {
      code: `
        <Layout/>`,
    },
  },
};
