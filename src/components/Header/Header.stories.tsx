import React from 'react';
import { Meta, Story } from '@storybook/react';
import Header, { IHeaderProps } from './index';

export default {
  title: 'Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Header component description',
      },
    },
  },
  tags: ['autodocs']
} as Meta;

const Template: Story<IHeaderProps> = (args:IHeaderProps) => <Header {...args} />;

export const Default: Story<IHeaderProps> = Template.bind({});
Default.args = {
  style: { background: '#10002b' },
  children: <div style={{ display: 'flex', color: 'white', alignItems: 'center', padding: '8px' }}>Company Name</div>,
};

Default.parameters = {
  docs: {
    source: {
      code: `
        <Header
          style={{ background: '#10002b' }}
        >
          <div style={{ display: 'flex', color: 'white', alignItems: 'center', padding: '8px' }}>Company Name</div>
        </Header>
      `,
    },
  },
};
