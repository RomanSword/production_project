import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { DropdownButton } from './dropdownButton';

const meta = {
    decorators,
    title: 'shared/DropdownButton',
    component: DropdownButton
} satisfies Meta<typeof DropdownButton>;

const storyArgs = {
    buttonText: 'Dropdown button text',
    options: [
        { id: 'test1', text: 'option 1' },
        { id: 'test2', text: 'option 2' },
        { id: 'test3', text: 'option 3' }
    ],
    onOptionClick: (id: string) => {
        console.log(id);
    },
    isOpened: true
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
