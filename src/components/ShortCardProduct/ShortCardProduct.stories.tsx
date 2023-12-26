import React, { FC, useState } from 'react';
import ShortProductCard, { IShortProductCardProps } from './index';
import { Meta, Story, StoryObj } from '@storybook/react';

export default {
  title: 'Короткая карточка товара',
  component: ShortProductCard,
  parameters: {
    docs: {
      description: {
        component: 'Короткая карточка товара',
      },
    },
  },
  tags: ['autodocs']
} as Meta;

const name = 'ASUS Vivobook 16 M1605YA-MB341 Ryzen 7-5825U/16G/512G SSD/16" WUXGA(1920x1200) IPS/Radeon Vega/No OS Черный, 90NB10R1-M00FM0'
const img = 'https://cdni.iconscout.com/illustration/premium/thumb/laptop-5424922-4543731.png?f=webp'
const desc = 'Это игровой ноутбук, представляющий собой мощное и производительное устройство, спроектированное специально для геймеров. Этот ноутбук сочетает в себе высокую производительность, передовые технологии и стильный дизайн, чтобы обеспечить уникальный опыт в мире игр.'

export const Default:StoryObj<IShortProductCardProps> = (args:IShortProductCardProps) => <ShortProductCard {...args}/>

Default.args = {
  price: 55555,
  name: name,
  description: desc,
  image: img
};
Default.parameters = {
  docs: {
    source: {
      code: `
      <ShortProductCard 
        price={${Default.args.price}} 
        name={'${Default.args.name}'} 
        descripion={'${Default.args.description}'} 
        image={'${Default.args.image}'}
      />`,
    },
  },
};

export const NoImage:StoryObj<IShortProductCardProps> = (args:IShortProductCardProps) => <ShortProductCard {...args}/>
NoImage.args = {
  price: 55555,
  name: name,
  description: desc,
  image: undefined,
};