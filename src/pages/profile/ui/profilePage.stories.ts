/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';

import {
    pageDecorators,
    storeDecorator,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import ProfilePage from './profilePage';

const meta = {
    decorators: pageDecorators,
    title: 'pages/ProfilePage',
    component: ProfilePage
} satisfies Meta<typeof ProfilePage>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Light: Story = {
    args: {},
    decorators: [
        themeLightDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                profile: {
                    isLoading: false,
                    error: '',
                    readonly: false
                }
            })
    ]
};

export const Dark: Story = {
    args: {},
    decorators: [
        themeDarkDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                profile: {
                    isLoading: false,
                    error: '',
                    readonly: false
                }
            })
    ]
};
