import type { Meta, StoryObj } from '@storybook/react';

import { decorators } from 'shared/config/storybookDecorators';

import { NavBar } from './navBar';

const meta = {
    decorators,
    title: 'widgets/NavBar',
    component: NavBar
} satisfies Meta<typeof NavBar>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {}
};
