import type { Meta, StoryObj } from '@storybook/react';

import { decorators } from 'shared/config/storybookDecorators';

import { SideBar } from './sideBar';

const meta = {
    decorators,
    title: 'widgets/SideBar',
    component: SideBar
} satisfies Meta<typeof SideBar>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {}
};
