import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { Modal } from './modal';

const meta = {
    decorators,
    title: 'shared/Modal',
    component: Modal
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof meta>;

export default meta;

const loremText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const Light: Story = {
    args: {
        children: loremText
    },
    decorators: [themeLightDecorator]
};

export const Dark: Story = {
    args: {
        children: loremText
    },
    decorators: [themeDarkDecorator]
};
