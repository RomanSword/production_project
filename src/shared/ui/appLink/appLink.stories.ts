import type { Meta, StoryObj } from '@storybook/react';

import { decorators } from 'shared/config/storybookDecorators';

import { AppLink, AppLinkTheme } from './appLink';

const meta = {
    decorators,
    title: 'shared/AppLink',
    component: AppLink
} satisfies Meta<typeof AppLink>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {
        to: '/',
        children: 'Link text'
    }
};

export const Secondary: Story = {
    args: {
        to: '/',
        children: 'Link text',
        theme: AppLinkTheme.SECONDARY
    }
};
