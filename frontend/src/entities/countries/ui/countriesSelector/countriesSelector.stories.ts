/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';

import {
    pageDecorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';
import { CountryChangeArgs } from 'shared/const/common';

import { CountriesSelector } from './countriesSelector';

const meta = {
    decorators: pageDecorators,
    title: 'entity/CountriesSelector',
    component: CountriesSelector
} satisfies Meta<typeof CountriesSelector>;

type Story = StoryObj<typeof meta>;

export default meta;

const args = {
    selectedId: 'test',
    onOptionClick: (item: CountryChangeArgs) => {
        return item;
    }
};

export const Light: Story = {
    args,
    decorators: [themeLightDecorator]
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
