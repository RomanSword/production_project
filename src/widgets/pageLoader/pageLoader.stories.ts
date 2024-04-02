import type { Meta, StoryObj } from '@storybook/react';

import { decorators } from 'shared/config/storybookDecorators';

import { PageLoader } from './pageLoader';

const meta = {
    decorators,
    title: 'widgets/PageLoader',
    component: PageLoader
} satisfies Meta<typeof PageLoader>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {}
};
