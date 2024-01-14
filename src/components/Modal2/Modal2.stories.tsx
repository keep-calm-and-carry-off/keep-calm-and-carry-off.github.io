import React, { ChangeEvent, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal2, { IModal2 } from './index';
import ButtonOtus from '../ButtonOtus';

export default {
  title: 'Модальное окно 2',
  component: Modal2,
  argTypes: {
    onClose: { action: 'onClose' },
    children: { control: 'text' },
  },
} as Meta;

export const Default: StoryObj<IModal2> = (args: IModal2) => {
  const [show, setIsShow] = useState(false)
  const [inputVal, setInputVal] = useState('')
  return (
    <>
      <div style={{display:'flex', justifyContent:'center'}}>
        <ButtonOtus onClick={() => setIsShow(true)}>Открыть Modal</ButtonOtus>
        <input type='text' value={inputVal} style={{marginLeft:'8px',width:'250px'}} placeholder='Введи значение для модального окна' onChange={(e: ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value)} />
      </div>
      <div style={{ display: 'flex', position: 'relative', height: '600px', alignItems: 'center', justifyContent: 'center' }}>
        {show && <Modal2 {...args} onClose={() => setIsShow(false)} ><p>{inputVal}</p></Modal2>}
      </div>
    </>
  );
};

Default.args = {
  children: 'Я модальное окно',
};
