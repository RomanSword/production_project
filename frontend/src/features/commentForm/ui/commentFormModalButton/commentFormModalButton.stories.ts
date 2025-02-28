import type { Meta, StoryObj } from '@storybook/react';

import {
    pageDecorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { CommentFormModalButton } from './commentFormModalButton';

const meta = {
    decorators: pageDecorators,
    title: 'features/CommentFormModalButton',
    component: CommentFormModalButton
} satisfies Meta<typeof CommentFormModalButton>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Light: Story = {
    args: {
        buttonText: 'Обновить',
        modalName: 'editCommentForm',
        onSubmit: () => {}
    },
    decorators: [themeLightDecorator]
};

export const Dark: Story = {
    args: {
        buttonText: 'Опубликовать',
        modalName: 'createCommentForm',
        onSubmit: () => {}
    },
    decorators: [themeDarkDecorator]
};
