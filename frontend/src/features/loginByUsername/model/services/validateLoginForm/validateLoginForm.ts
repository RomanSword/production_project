import { IFormData, IValidationErrors, ValidationConfig, processFormWithConfig } from 'shared/lib';

import { LoginData } from '../../types/loginSchema';

const validationConfig: ValidationConfig = {
    username: {
        required: true
    },
    password: {
        required: true
    }
};

export function validateLoginForm(formData: LoginData): IValidationErrors {
    const data: IFormData = {
        username: formData.username,
        password: formData.password
    };

    return processFormWithConfig(data, validationConfig);
}
