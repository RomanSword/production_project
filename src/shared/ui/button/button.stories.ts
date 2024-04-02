import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme } from './button';

const meta = {
    title: 'shared/Button',
    component: Button
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {
        children: 'Button text'
    }
};

export const Clear: Story = {
    args: {
        children: 'Button text',
        theme: ButtonTheme.CLEAR
    }
};

export const Outline: Story = {
    args: {
        children: 'Button text',
        theme: ButtonTheme.OUTLINE
    }
};
