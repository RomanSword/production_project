import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    themeDarkDecorator,
    themeCyberpunkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { Skeleton } from './skeleton';

const meta = {
    decorators,
    title: 'shared/Skeleton',
    component: Skeleton
} satisfies Meta<typeof Skeleton>;

type Story = StoryObj<typeof meta>;

export default meta;

export const LightCircle: Story = {
    args: {
        width: '100px',
        height: '100px',
        borderRadius: '50%'
    },
    decorators: [themeLightDecorator]
};

export const CyberpunkSquare: Story = {
    args: {
        width: '100px',
        height: '100px'
    },
    decorators: [themeCyberpunkDecorator]
};

export const DarkLine: Story = {
    args: {
        width: '100px',
        height: '10px'
    },
    decorators: [themeDarkDecorator]
};
