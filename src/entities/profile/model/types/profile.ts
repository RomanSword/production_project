import { Country } from 'shared/const/common';

export interface Profile {
    username: string;
    firstname: string;
    lastname: string;
    age: number;
    city: string;
    country: Country;
    avatar: string;
}

export interface ProfileSchema {
    isLoading: boolean;
    readonly: boolean;
    data?: Profile;
    error?: string;
}
