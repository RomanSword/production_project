import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { RabbitImage } from 'shared/assets/images/rabbit';

import { ImageBlock, ImageBlockSize } from './imageBlock';

const meta = {
    decorators,
    title: 'shared/ImageBlock',
    component: ImageBlock
} satisfies Meta<typeof ImageBlock>;

type Story = StoryObj<typeof meta>;

export default meta;

export const LightSmall: Story = {
    args: { src: RabbitImage, size: ImageBlockSize.SMALL },
    decorators: [themeLightDecorator]
};

export const LightMedium: Story = {
    args: { src: RabbitImage, size: ImageBlockSize.MEDIUM },
    decorators: [themeLightDecorator]
};

export const LightLarge: Story = {
    args: { src: RabbitImage, size: ImageBlockSize.LARGE },
    decorators: [themeLightDecorator]
};

export const DarkSmall: Story = {
    args: { src: RabbitImage, size: ImageBlockSize.SMALL },
    decorators: [themeDarkDecorator]
};

export const DarkMedium: Story = {
    args: { src: RabbitImage, size: ImageBlockSize.MEDIUM },
    decorators: [themeDarkDecorator]
};

export const DarkLarge: Story = {
    args: { src: RabbitImage, size: ImageBlockSize.LARGE },
    decorators: [themeDarkDecorator]
};
