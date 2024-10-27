/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';

import {
    pageDecorators,
    storeDecorator,
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

export const LightAuth: Story = {
    args: {},
    decorators: [
        themeLightDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                user: {
                    authData: {
                        username: 'test'
                    },
                    _inited: true
                }
            })
    ]
};
