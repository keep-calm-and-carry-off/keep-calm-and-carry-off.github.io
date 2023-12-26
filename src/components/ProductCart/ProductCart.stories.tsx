import React, { ChangeEvent, useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProductCart, { IProductCart } from './index';

const name = 'ASUS Vivobook 16 M1605YA-MB341 Ryzen 7-5825U/16G/512G SSD/16" WUXGA(1920x1200) IPS/Radeon Vega/No OS Черный, 90NB10R1-M00FM0'
const img = 'https://cdni.iconscout.com/illustration/premium/thumb/laptop-5424922-4543731.png?f=webp'
const desc = 'Это игровой ноутбук, представляющий собой мощное и производительное устройство, спроектированное специально для геймеров. Этот ноутбук сочетает в себе высокую производительность, передовые технологии и стильный дизайн, чтобы обеспечить уникальный опыт в мире игр.'

export default {
    title: 'Карточка товара в корзине',
    component: ProductCart,
    argTypes: {
        onEdit: { action: 'onEdit' },
        onDelete: { action: 'onDelete' },
    },
    parameters: {
        docs: {
            source: {
                code: `
          <ProductCart
            name='${name}'
            price={55555}
            qty={1}
            setQty={handleSetQty}
            image="${img}"
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        `,
            },
        },
    },
} as Meta;

export const Default: StoryObj<IProductCart> = (args: IProductCart) => {
    const [qty, setQty] = useState(args.qty);
     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setQty(Number(value));
    }
  };
    return <ProductCart qty={qty} setQty={setQty} {...args} />
}
Default.args = {
    name: name,
    price: 55555,
    image: img,
    onEdit: action('onEdit'),
    onDelete: action('onDelete'),
    qty: 2
};
