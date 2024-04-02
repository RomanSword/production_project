import type { Meta, StoryObj } from '@storybook/react';

import { decorators } from 'shared/config/storybookDecorators';

import { PageError } from './pageError';

const meta = {
    decorators,
    title: 'widgets/PageError',
    component: PageError
} satisfies Meta<typeof PageError>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {}
};
