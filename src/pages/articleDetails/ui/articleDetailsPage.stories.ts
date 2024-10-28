import type { Meta, StoryObj } from '@storybook/react';

import {
    pageDecorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import ArticleDetailsPageAsync from './articleDetailsPage';

const meta = {
    decorators: pageDecorators,
    title: 'pages/ArticleDetailsPageAsync',
    component: ArticleDetailsPageAsync
} satisfies Meta<typeof ArticleDetailsPageAsync>;

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
