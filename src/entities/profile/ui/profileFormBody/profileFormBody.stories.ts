/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';

import {
    pageDecorators,
    themeDarkDecorator,
    themeLightDecorator
} from 'shared/config/storybookDecorators';
import { profileData } from 'shared/mocks/api';

import { ProfileFormBody } from './profileFormBody';
import { CityChangeArgs, CountryChangeArgs } from 'shared/const/common';

const meta = {
    decorators: pageDecorators,
    title: 'entity/profile/profileFormBody',
    component: ProfileFormBody
} satisfies Meta<typeof ProfileFormBody>;

type Story = StoryObj<typeof meta>;

export default meta;

const args = {
    readonly: false,
    isLoading: false,
    withLoadingAvatar: false,
    withLoadingCover: false,
    formData: {
        ...profileData
    },
    errors: {},
    onChangeField: (key: string, value: string) => ({ key, value }),
    onChangeCountryField: (args: CountryChangeArgs) => ({ args }),
    onChangeCityField: (args: CityChangeArgs) => ({ args })
};

const errors = {
    username: 'required',
    firstname: 'required',
    lastname: 'required',
    age: 'required'
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

export const LightWithErrors: Story = {
    args: {
        ...args,
        errors
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

export const DarkWithErrors: Story = {
    args: {
        ...args,
        errors
    },
    decorators: [themeDarkDecorator]
};
