import type { Meta, StoryObj } from '@storybook/react';

import { decorators } from 'shared/config/storybookDecorators';

import { LanguageSwitcher } from './languageSwitcher';

const meta = {
    decorators,
    title: 'widgets/LanguageSwitcher',
    component: LanguageSwitcher
} satisfies Meta<typeof LanguageSwitcher>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {}
};
