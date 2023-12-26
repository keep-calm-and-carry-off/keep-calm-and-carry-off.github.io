
import React from 'react';
import { Story, Meta, StoryObj } from '@storybook/react';
import { IProductCardProps } from './index';

import ProductCard from './index';

export default {
  title: 'Карточка товара',
  component: ProductCard,
  parameters: {
    docs: {
      description: {
        component: 'Карточка товара',
      },
    },
  },
  tags: ['autodocs']
} as Meta;

const name = 'ASUS Vivobook 16 M1605YA-MB341 Ryzen 7-5825U/16G/512G SSD/16" WUXGA(1920x1200) IPS/Radeon Vega/No OS Черный, 90NB10R1-M00FM0'
const img = 'https://cdni.iconscout.com/illustration/premium/thumb/laptop-5424922-4543731.png?f=webp'
const desc = 'Это игровой ноутбук, представляющий собой мощное и производительное устройство, спроектированное специально для геймеров. Этот ноутбук сочетает в себе высокую производительность, передовые технологии и стильный дизайн, чтобы обеспечить уникальный опыт в мире игр.'
const category = 'Ноутбуки'

const Default:StoryObj<IProductCardProps> = (args:IProductCardProps) => <ProductCard {...args}/>
Default.args = {
  price: 55555,
  name: name,
  description: desc,
  category: category,
  image: img, 
};
Default.parameters = {
  docs: {
    source: {
      code: '<ProductCard price={999} name="Продукт" description="Описание продукта" category="Категория" image="https://placekitten.com/200/300" />',
    },
  },
};
export { Default }


 
const NoImage:StoryObj<IProductCardProps> = (args:IProductCardProps) => <ProductCard {...args}/>
NoImage.args = {
  price: 999,
  name: name,
  description: desc,
  category: category, 
};
export { NoImage }
