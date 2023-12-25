import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal, { IModal } from './index';
import ButtonOtus from '../ButtonOtus';

export default {
  title: 'Модальное окно',
  component: Modal,
  argTypes: {
    visible: { control: 'boolean' },
    onClose: { action: 'onClose' },
    children: { control: 'text' },
  },
} as Meta;

export const Default: StoryObj<IModal> = (args:IModal) => {
  const [visible, setVisible] = useState(args.visible);

  return (
    <div style={{display:'flex', position:'relative', height:'600px', alignItems:'center', justifyContent:'center'}}>
      <ButtonOtus onClick={() => setVisible(true)}>Открыть Modal</ButtonOtus>
      <Modal {...args} visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
};

Default.args = {
  visible: true,
  children: 'Я модальное окно',
};
