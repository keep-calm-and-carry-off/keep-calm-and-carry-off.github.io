import type { Meta, StoryObj } from '@storybook/react';
import { AuthForm } from './AuthForm';

const meta: Meta<typeof AuthForm> = {
  title: 'Форма авторизации',
  component: AuthForm,
};

export default meta;

export const Default = {
  args: {
    primary: true,
  },
};
