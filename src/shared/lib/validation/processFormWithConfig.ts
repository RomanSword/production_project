import {
    IFormData,
    IValidationErrors,
    ValidationConditions,
    ValidationConfig,
    ValidationErrors
} from './interface';

export function processFormWithConfig(
    formData: IFormData,
    validationConfig: ValidationConfig
): IValidationErrors {
    const errDict: IValidationErrors = {};

    Object.keys(validationConfig).map((key: string) => {
        const value = formData[key];
        const config = validationConfig[key];

        if (!value && config.required) {
            errDict[key] = ValidationErrors.REQUIRED;
        }

        if (value && config.checks) {
            config.checks.forEach(check => {
                if (
                    check.condition === ValidationConditions.GREATER &&
                    check.value &&
                    value <= check.value
                ) {
                    errDict[key] = `${ValidationErrors.GREATER_THAN},${check.value}`;
                }

                if (
                    check.condition === ValidationConditions.LESSER &&
                    check.value &&
                    value >= check.value
                ) {
                    errDict[key] = `${ValidationErrors.LESSER_THAN},${check.value}`;
                }
            });
        }
    });

    return errDict;
}
