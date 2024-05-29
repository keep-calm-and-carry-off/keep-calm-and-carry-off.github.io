import React, { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Collapse, { CollapseProps } from './index';
import ButtonOtus from '../ButtonOtus';

export default {
  title: 'Коллапс',
  component: Collapse,
  parameters: {
    docs: {
      description: {
        component: 'Компонент Header',
      },
    },
  },
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = (args: CollapseProps) => {
  const [opened, setOpened] = useState<boolean>(args.opened);

  useEffect(() => {
    setOpened(args.opened);
  }, [args.opened]);
  return (
    <div style={{ padding: '0px' }}>
      <ButtonOtus style={{ marginBottom: '16px' }} onClick={() => setOpened(!opened)}>
        {opened ? 'Закрыть коллапс' : 'Открыть коллапс'}
      </ButtonOtus>
      <Collapse {...args} opened={opened}>
        {args.children}
      </Collapse>
    </div>
  );
};
Default.args = {
  opened: false,
  children: (
    <div style={{ border: '1px solid red', width: 'max-content', padding: '16px', borderRadius: '16px' }}>
      Я children
    </div>
  ),
};
