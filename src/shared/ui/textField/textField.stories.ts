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

const args = {
    id: 'test',
    name: 'test',
    label: 'Тестовое поле'
};

export const Light: Story = {
    args,
    decorators: [themeLightDecorator]
};

export const LightDisabled: Story = {
    args: {
        ...args,
        readonly: true
    },
    decorators: [themeLightDecorator]
};

export const Dark: Story = {
    args,
    decorators: [themeDarkDecorator]
};

export const DarkDisabled: Story = {
    args: {
        ...args,
        readonly: true
    },
    decorators: [themeDarkDecorator]
};
