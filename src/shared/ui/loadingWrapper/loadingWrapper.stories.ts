import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { LoadingWrapper } from './loadingWrapper';

const meta = {
    decorators,
    title: 'shared/LoadingWrapper',
    component: LoadingWrapper
} satisfies Meta<typeof LoadingWrapper>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Light: Story = {
    args: { isLoading: true },
    decorators: [themeLightDecorator]
};

export const Dark: Story = {
    args: { isLoading: true },
    decorators: [themeDarkDecorator]
};
