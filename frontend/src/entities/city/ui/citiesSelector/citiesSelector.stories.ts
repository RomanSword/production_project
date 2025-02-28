/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';

import {
    pageDecorators,
    storeDecorator,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';
import { CityChangeArgs } from 'shared/const/common';

import { CitiesSelector } from './citiesSelector';

const meta = {
    decorators: pageDecorators,
    title: 'entity/CitiesSelector',
    component: CitiesSelector
} satisfies Meta<typeof CitiesSelector>;

type Story = StoryObj<typeof meta>;

export default meta;

const args = {
    countryId: '1',
    selectedId: 'test',
    onOptionClick: (args: CityChangeArgs) => {
        return args;
    }
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
