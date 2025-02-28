/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';

import {
    pageDecorators,
    storeDecorator,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { UploadFileButton } from './uploadFileButton';

const meta = {
    decorators: pageDecorators,
    title: 'entity/UploadFileButton',
    component: UploadFileButton
} satisfies Meta<typeof UploadFileButton>;

type Story = StoryObj<typeof meta>;

export default meta;

const args = {
    id: 'uploadBtn',
    onUploadSuccess: (src: string) => src,
    onUploadError: (msg: string) => msg,
    onTryAgain: () => null
};

export const Light: Story = {
    args,
    decorators: [
        themeLightDecorator,
        (Story: any) =>
            storeDecorator(Story, {
                file: {
                    data: {},
                    isLoading: false,
                    error: ''
                }
            })
    ]
};

export const LightDisabled: Story = {
    args: {
        ...args,
        readonly: true
    },
    decorators: [themeLightDecorator]
};

export const Dark: Story = {
    args,
    decorators: [themeDarkDecorator]
};

export const DarkDisabled: Story = {
    args: {
        ...args,
        readonly: true
    },
    decorators: [themeDarkDecorator]
};
