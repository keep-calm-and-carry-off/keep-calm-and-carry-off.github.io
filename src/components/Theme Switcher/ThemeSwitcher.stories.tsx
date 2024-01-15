// ThemeSwitcher.stories.tsx

import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher from './index';

export default {
  title: 'Переключение темы',
  component: ThemeSwitcher,
  parameters: {
    docs: {
      description: {
        component: 'Компонент для переключения темы',
      },
    },
  },
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = () => {
    const [theme, selTheme] = useState('light')
    return <ThemeSwitcher themeSelector={selTheme} />;
}


Default.parameters = {
  docs: {
    source: {
      code: `
        <ThemeSwitcher themeSelector={yourThemeSelectorFunction} />`,
    },
  },
};
