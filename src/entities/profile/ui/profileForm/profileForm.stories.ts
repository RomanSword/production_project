/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    storeDecorator,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import ProfileForm from './profileForm';

const meta = {
    decorators,
    title: 'features/ProfileForm',
    component: ProfileForm
} satisfies Meta<typeof ProfileForm>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Light: Story = {
    args: {},
    decorators: [
        themeLightDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                login: {
                    username: 'test',
                    password: 'test',
                    isLoading: false,
                    error: ''
                }
            })
    ]
};

export const LightError: Story = {
    args: {},
    decorators: [
        themeLightDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                login: {
                    username: 'test',
                    password: 'test',
                    isLoading: false,
                    error: 'incorrect_data'
                }
            })
    ]
};

export const LightIsLoading: Story = {
    args: {},
    decorators: [
        themeLightDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                login: {
                    username: 'test',
                    password: 'test',
                    isLoading: true,
                    error: ''
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
                login: {
                    username: 'test',
                    password: 'test',
                    isLoading: false,
                    error: ''
                }
            })
    ]
};

export const DarkError: Story = {
    args: {},
    decorators: [
        themeDarkDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                login: {
                    username: 'test',
                    password: 'test',
                    isLoading: false,
                    error: 'incorrect_data'
                }
            })
    ]
};

export const DarkIsLoading: Story = {
    args: {},
    decorators: [
        themeDarkDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                login: {
                    username: 'test',
                    password: 'test',
                    isLoading: true,
                    error: ''
                }
            })
    ]
};
