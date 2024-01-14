// LanguageSwitcher.stories.tsx

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LanguageSwitcher from './index';

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

export const  Default:StoryObj = () => <LanguageSwitcher/>

Default.parameters = {
  docs: {
    source: {
      code: `
        <LanguageSwitcher/>`,
    },
  },
};
