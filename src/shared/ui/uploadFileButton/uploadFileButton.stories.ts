import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { UploadFileButton } from './uploadFileButton';

const meta = {
    decorators,
    title: 'shared/UploadFileButton',
    component: UploadFileButton
} satisfies Meta<typeof UploadFileButton>;

type Story = StoryObj<typeof meta>;

export default meta;

const args = { id: 'uploadBtn', uploadFile: (src: File) => src };

export const Light: Story = {
    args,
    decorators: [themeLightDecorator]
};

export const Dark: Story = {
    args,
    decorators: [themeDarkDecorator]
};
