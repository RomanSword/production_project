import type { Meta, StoryObj } from '@storybook/react';

import { decorators } from 'shared/config/storybookDecorators';

import MainPage from './mainPage';

const meta = {
    decorators,
    title: 'pages/MainPage',
    component: MainPage
} satisfies Meta<typeof MainPage>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {}
};
