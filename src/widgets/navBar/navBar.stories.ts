import type { Meta, StoryObj } from '@storybook/react';

import {
    pageDecorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { NavBar } from './navBar';

const meta = {
    decorators: pageDecorators,
    title: 'widgets/NavBar',
    component: NavBar
} satisfies Meta<typeof NavBar>;

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
