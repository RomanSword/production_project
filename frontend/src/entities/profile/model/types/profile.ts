import { IValidationErrors } from 'shared/lib';

export interface Profile {
    id?: string;
    username?: string;
    firstname?: string;
    lastname?: string;
    avatar_src?: string;
    cover_src?: string;
    age?: number;
    country_id?: string;
    country?: { id: string; name_ru: string; name_en: string };
    city_id?: string;
    city?: { id: string; country_id: string; name_ru: string; name_en: string };
}

export interface ProfileAuthDataSchema {
    id: string;
    firstname: string;
}

export interface ProfileSchema {
    isLoading: boolean;
    isEdited: boolean;
    readonly: boolean;
    data: Profile;
    formData: Profile;
    authData?: ProfileAuthDataSchema;
    error?: string;
    validationErrors?: IValidationErrors;

    isInited: boolean;
}
