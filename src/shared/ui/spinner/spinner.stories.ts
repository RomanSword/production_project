import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { Spinner } from './spinner';

const meta = {
    decorators,
    title: 'shared/Spinner',
    component: Spinner
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof meta>;

export default meta;

export const PrimaryLight: Story = {
    args: {},
    decorators: [themeLightDecorator]
};

export const PrimaryDark: Story = {
    args: {},
    decorators: [themeDarkDecorator]
};
