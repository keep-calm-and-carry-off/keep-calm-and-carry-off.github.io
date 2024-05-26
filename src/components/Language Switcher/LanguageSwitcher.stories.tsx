// LanguageSwitcher.stories.tsx

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LanguageSwitcher from './index';
import { Contacts } from '../Contacts';

export default {
  title: 'Переключение языка',
  component: LanguageSwitcher,
  parameters: {
    docs: {
      description: {
        component: 'Компонент для переключения языка',
      },
    },
  },
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = () => {
  return (
    <>
      <Contacts />
      <div style={{ padding: '8px' }}>
        <LanguageSwitcher />
      </div>
    </>
  );
};
Default.parameters = {
  docs: {
    source: {
      code: `
        <LanguageSwitcher/>`,
    },
  },
};
