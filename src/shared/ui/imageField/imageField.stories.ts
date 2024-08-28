import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { ImageField } from './imageField';

const meta = {
    decorators,
    title: 'shared/ImageField',
    component: ImageField
} satisfies Meta<typeof ImageField>;

type Story = StoryObj<typeof meta>;

export default meta;

const args = {
    src: '',
    alt: 'test',
    label: 'test',
    changeSrc: function (src: string) {
        console.log(src);
    },
    clearSrc: function () {}
};

export const Light: Story = {
    args,
    decorators: [themeLightDecorator]
};

export const Dark: Story = {
    args,
    decorators: [themeDarkDecorator]
};
