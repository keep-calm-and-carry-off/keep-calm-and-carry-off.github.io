import type { Meta, StoryObj } from '@storybook/react';
import { RegistrationForm } from './RegistrationForm';

const meta: Meta<typeof RegistrationForm> = {
  title: 'Форма регистрации',
  component: RegistrationForm,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    primary: true,
  },
};
