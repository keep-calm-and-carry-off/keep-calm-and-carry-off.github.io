import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import RangeSlider, { ISliderRange } from './index'

export default {
    title: 'Слайдер диапазона',
    component: RangeSlider,
    parameters: {
        docs: {
            description: {
                component: 'Слайдер диапазона. В случае если значение не равно минимальному или максимальному, подсказка не скрывается',
            },
        },
    },
    tags: ['autodocs']
} as Meta;

export const VerticalVariant: StoryObj = (args: ISliderRange) => {
    return (
        <div style={{ height: '300px' }}>
            <RangeSlider min={args.min} max={args.max} orientation='vertical' value={args.value} setValue={args.setValue} />
        </div>

    );
};

export const HorizontalVariant: StoryObj = (args: ISliderRange) => {
    return (
        <div style={{ display:'flex', alignItems: 'flex-end', justifyContent:'flex-end', height: '300px' }}>
            <RangeSlider min={args.min} max={args.max} orientation='horizontal' value={args.value} setValue={args.setValue} />
        </div>

    );
};

VerticalVariant.args = {
    min: 0,
    max: 550,
    value: 235,
};
HorizontalVariant.args = {
    min: 0,
    max: 550,
    value: 235,
};