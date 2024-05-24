import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { TextField } from './textField';

const meta = {
    decorators,
    title: 'shared/TextField',
    component: TextField
} satisfies Meta<typeof TextField>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Light: Story = {
    args: {
        id: 'test',
        name: 'test',
        label: 'Тестовое поле'
    },
    decorators: [themeLightDecorator]
};

export const Dark: Story = {
    args: {
        id: 'test',
        name: 'test',
        label: 'Тестовое поле'
    },
    decorators: [themeDarkDecorator]
};
