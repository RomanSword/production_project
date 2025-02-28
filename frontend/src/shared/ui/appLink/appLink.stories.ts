import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { AppLink, AppLinkTheme } from './appLink';

const meta = {
    decorators,
    title: 'shared/AppLink',
    component: AppLink
} satisfies Meta<typeof AppLink>;

type Story = StoryObj<typeof meta>;

export default meta;

export const PrimaryLight: Story = {
    args: {
        to: '/',
        children: 'Link text'
    },
    decorators: [themeLightDecorator]
};

export const SecondaryLight: Story = {
    args: {
        to: '/',
        children: 'Link text',
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [themeLightDecorator]
};

export const PrimaryDark: Story = {
    args: {
        to: '/',
        children: 'Link text'
    },
    decorators: [themeDarkDecorator]
};

export const SecondaryDark: Story = {
    args: {
        to: '/',
        children: 'Link text',
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [themeDarkDecorator]
};
