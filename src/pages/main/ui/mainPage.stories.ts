import type { Meta, StoryObj } from '@storybook/react';

import {
    pageDecorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import MainPage from './mainPage';

const meta = {
    decorators: pageDecorators,
    title: 'pages/MainPage',
    component: MainPage
} satisfies Meta<typeof MainPage>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Light: Story = {
    args: {},
    decorators: [themeLightDecorator]
};

export const Dark: Story = {
    args: {},
    decorators: [themeDarkDecorator]
};
