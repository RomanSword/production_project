import type { Meta, StoryObj } from '@storybook/react';

import { decorators } from 'shared/config/storybookDecorators';

import { ThemeSwitcher } from './themeSwitcher';

const meta = {
    decorators,
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher
} satisfies Meta<typeof ThemeSwitcher>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {}
};
