import type { Meta, StoryObj } from '@storybook/react';

import { decorators } from 'shared/config/storybookDecorators';

import { NotFoundPage } from './notFoundPage';

const meta = {
    decorators,
    title: 'pages/NotFoundPage',
    component: NotFoundPage
} satisfies Meta<typeof NotFoundPage>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {}
};
