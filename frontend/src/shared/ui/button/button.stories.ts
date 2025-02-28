import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { Button, ButtonTheme } from './button';

const meta = {
    decorators,
    title: 'shared/Button',
    component: Button
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default meta;

export const PrimaryLight: Story = {
    args: {
        children: 'Button text'
    },
    decorators: [themeLightDecorator]
};

export const PrimaryLightDisabled: Story = {
    args: {
        isDisabled: true,
        children: 'Button text'
    },
    decorators: [themeLightDecorator]
};

export const ClearLight: Story = {
    args: {
        children: 'Button text',
        theme: ButtonTheme.CLEAR
    },
    decorators: [themeLightDecorator]
};

export const OutlineLight: Story = {
    args: {
        children: 'Button text',
        theme: ButtonTheme.OUTLINE
    },
    decorators: [themeLightDecorator]
};

export const PrimaryDark: Story = {
    args: {
        children: 'Button text'
    },
    decorators: [themeDarkDecorator]
};

export const PrimaryDarkDisabled: Story = {
    args: {
        isDisabled: true,
        children: 'Button text'
    },
    decorators: [themeDarkDecorator]
};

export const ClearDark: Story = {
    args: {
        children: 'Button text',
        theme: ButtonTheme.CLEAR
    },
    decorators: [themeDarkDecorator]
};

export const OutlineDark: Story = {
    args: {
        children: 'Button text',
        theme: ButtonTheme.OUTLINE
    },
    decorators: [themeDarkDecorator]
};
