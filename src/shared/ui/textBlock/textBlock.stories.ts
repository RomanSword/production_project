import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { TextBlock, TextBlockType } from './textBlock';

const meta = {
    decorators,
    title: 'shared/TextBlock',
    component: TextBlock
} satisfies Meta<typeof TextBlock>;

type Story = StoryObj<typeof meta>;

export default meta;

const loremText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const PrimaryLightError: Story = {
    args: {
        text: loremText,
        type: TextBlockType.ERROR
    },
    decorators: [themeLightDecorator]
};

export const PrimaryDarkError: Story = {
    args: {
        text: loremText,
        type: TextBlockType.ERROR
    },
    decorators: [themeDarkDecorator]
};

export const PrimaryLightText: Story = {
    args: {
        text: loremText,
        type: TextBlockType.TEXT
    },
    decorators: [themeLightDecorator]
};

export const PrimaryDarkText: Story = {
    args: {
        text: loremText,
        type: TextBlockType.TEXT
    },
    decorators: [themeDarkDecorator]
};

export const PrimaryLightTitle: Story = {
    args: {
        text: loremText,
        type: TextBlockType.TITLE
    },
    decorators: [themeLightDecorator]
};

export const PrimaryDarkTitle: Story = {
    args: {
        text: loremText,
        type: TextBlockType.TITLE
    },
    decorators: [themeDarkDecorator]
};
