import { IValidationErrors } from 'shared/lib';

export interface LoginData {
    username?: string;
    password?: string;
}

export interface LoginSchema {
    formData: LoginData;
    isLoading: boolean;
    error?: string;
    validationErrors?: IValidationErrors;
}
