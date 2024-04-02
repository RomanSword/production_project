import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './spinner';

const meta = {
    title: 'shared/Spinner',
    component: Spinner
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {}
};
