/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';

import {
    pageDecorators,
    storeDecorator,
    themeCyberpunkDecorator,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';
import { articleDetailsData } from 'shared/mocks/api';

import { ArticleDetails } from './articleDetails';

const meta = {
    decorators: pageDecorators,
    title: 'entity/ArticleDetails',
    component: ArticleDetails
} satisfies Meta<typeof ArticleDetails>;

type Story = StoryObj<typeof meta>;

export default meta;

const store = {
    articleDetails: {
        isLoading: false,
        error: '',
        data: { ...articleDetailsData }
    }
};

export const Light: Story = {
    args: {
        id: '1'
    },
    decorators: [themeLightDecorator, (Story: any) => storeDecorator(Story, store)]
};

export const LightIsLoading: Story = {
    args: {
        id: '1'
    },
    decorators: [
        themeLightDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                articleDetails: {
                    ...store.articleDetails,
                    isLoading: true
                }
            })
    ]
};

export const LightError: Story = {
    args: {
        id: '1'
    },
    decorators: [
        themeLightDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                articleDetails: {
                    ...store.articleDetails,
                    error: 'test_error'
                }
            })
    ]
};

export const Cyberpunk: Story = {
    args: {
        id: '1'
    },
    decorators: [themeCyberpunkDecorator, (Story: any) => storeDecorator(Story, store)]
};

export const CyberpunkIsLoading: Story = {
    args: {
        id: '1'
    },
    decorators: [
        themeCyberpunkDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                articleDetails: {
                    ...store.articleDetails,
                    isLoading: true
                }
            })
    ]
};

export const CyberpunkError: Story = {
    args: {
        id: '1'
    },
    decorators: [
        themeCyberpunkDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                articleDetails: {
                    ...store.articleDetails,
                    error: 'test_error'
                }
            })
    ]
};

export const Dark: Story = {
    args: {
        id: '1'
    },
    decorators: [themeDarkDecorator, (Story: any) => storeDecorator(Story, store)]
};

export const DarkIsLoading: Story = {
    args: {
        id: '1'
    },
    decorators: [
        themeDarkDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                articleDetails: {
                    ...store.articleDetails,
                    isLoading: true
                }
            })
    ]
};

export const DarkError: Story = {
    args: {
        id: '1'
    },
    decorators: [
        themeDarkDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                articleDetails: {
                    ...store.articleDetails,
                    error: 'test_error'
                }
            })
    ]
};
