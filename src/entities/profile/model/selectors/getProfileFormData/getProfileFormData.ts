import { StateSchema } from 'app/providers/storeProvider';

export const getProfileFormDataAge = (state: StateSchema) => state?.profile?.formData?.age;

export const getProfileFormDataAvatar = (state: StateSchema) =>
    state?.profile?.formData?.avatar?.src;

export const getProfileFormDataCity = (state: StateSchema) => state?.profile?.formData?.city;

export const getProfileFormDataCountry = (state: StateSchema) => state?.profile?.formData?.country;

export const getProfileFormDataFirstname = (state: StateSchema) =>
    state?.profile?.formData?.firstname;

export const getProfileFormDataLastname = (state: StateSchema) =>
    state?.profile?.formData?.lastname;

export const getProfileFormDataUsername = (state: StateSchema) =>
    state?.profile?.formData?.username;
