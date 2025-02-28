import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { Selector } from './selector';

const meta = {
    decorators,
    title: 'shared/Selector',
    component: Selector
} satisfies Meta<typeof Selector>;

const storyArgs = {
    label: 'Test Selector',
    buttonText: 'Dropdown button text',
    options: [
        { id: 'test1', text: 'option 1' },
        { id: 'test2', text: 'option 2' },
        { id: 'test3', text: 'option 3' }
    ],
    isOpened: true,
    onOptionClick: (id: string) => id
};

type Story = StoryObj<typeof meta>;

export default meta;

export const PrimaryLight: Story = {
    args: storyArgs,
    decorators: [themeLightDecorator]
};

export const PrimaryDark: Story = {
    args: storyArgs,
    decorators: [themeDarkDecorator]
};
