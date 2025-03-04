/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';

import {
    pageDecorators,
    storeDecorator,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';
import { profileMockData } from 'shared/mocks/api';

import ProfilePage from './profilePage';

const meta = {
    title: 'pages/ProfilePage',
    decorators: pageDecorators,
    component: ProfilePage
} satisfies Meta<typeof ProfilePage>;

type Story = StoryObj<typeof meta>;

export default meta;

const store = {
    profile: {
        isLoading: false,
        error: '',
        isEdited: false,
        isInited: false,
        readonly: true,
        data: { ...profileMockData },
        formData: { ...profileMockData }
    }
};

export const LightReadOnly: Story = {
    args: {},
    decorators: [themeLightDecorator, (Story: any) => storeDecorator(Story, store)]
};

export const LightIsLoading: Story = {
    args: {},
    decorators: [
        themeLightDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                profile: {
                    ...store.profile,
                    isLoading: true
                }
            })
    ]
};

export const LightErrors: Story = {
    args: {},
    decorators: [
        themeLightDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                profile: {
                    ...store.profile,
                    error: 'test_error'
                }
            })
    ]
};

export const DarkReadOnly: Story = {
    args: {},
    decorators: [themeDarkDecorator, (Story: any) => storeDecorator(Story, store)]
};

export const DarkIsLoading: Story = {
    args: {},
    decorators: [
        themeDarkDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                profile: {
                    ...store.profile,
                    isLoading: true
                }
            })
    ]
};

export const DarkErrors: Story = {
    args: {},
    decorators: [
        themeDarkDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                profile: {
                    ...store.profile,
                    error: 'test_error'
                }
            })
    ]
};
