/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import {
    decorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';

import { LoadingWrapper } from './loadingWrapper';

const meta = {
    decorators,
    title: 'shared/LoadingWrapper',
    component: LoadingWrapper
} satisfies Meta<typeof LoadingWrapper>;

type Story = StoryObj<typeof meta>;

export default meta;

const element = (
    <div style={{ width: 300, height: 300, backgroundColor: 'red', color: 'black' }}>
        Some test content
        <br />
        Some test content
        <br />
        Some test content
        <br />
        Some test content
        <br />
        Some test content
        <br />
        Some test content
        <br />
        Some test content
        <br />
    </div>
);

export const Light: Story = {
    args: {
        isLoading: true,
        contentClassName: '',
        children: [element]
    },
    decorators: [themeLightDecorator]
};

export const Dark: Story = {
    args: { isLoading: true, contentClassName: '', children: [element] },
    decorators: [themeDarkDecorator]
};
