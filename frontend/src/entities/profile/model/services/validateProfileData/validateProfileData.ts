import {
    IFormData,
    IValidationErrors,
    ValidationConditions,
    ValidationConfig,
    processFormWithConfig
} from 'shared/lib';

import { Profile } from '../../types/profile';

const validationConfig: ValidationConfig = {
    username: {
        required: true
    },
    firstname: {
        required: true
    },
    lastname: {
        required: true
    },
    age: {
        required: true,
        checks: [
            {
                condition: ValidationConditions.GREATER,
                value: 16
            },
            {
                condition: ValidationConditions.LESSER,
                value: 100
            }
        ]
    }
};

export function validateProfileData(profileData: Profile): IValidationErrors {
    const data: IFormData = {
        username: profileData.username,
        firstname: profileData.firstname,
        lastname: profileData.lastname,
        age: profileData.age
    };

    return processFormWithConfig(data, validationConfig);
}
