import type { Meta, StoryObj } from '@storybook/react';

import { decorators } from 'shared/config/storybookDecorators';

import HelpPage from './helpPage';

const meta = {
    decorators,
    title: 'pages/HelpPage',
    component: HelpPage
} satisfies Meta<typeof HelpPage>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {}
};
