export enum ValidationErrors {
    REQUIRED = 'required',
    GREATER_THAN = 'greater_than',
    LESSER_THAN = 'lesser_than'
}

export enum ValidationConditions {
    GREATER = 'greater',
    LESSER = 'lesser'
}

export type ValidationCondition = `${ValidationConditions}`;

export interface ValidationConfig {
    [key: string]: {
        required: boolean;
        checks?: {
            condition: ValidationCondition;
            value?: string | number;
        }[];
    };
}

export interface IFormData {
    [key: string]: string | number | null | undefined;
}

export interface IValidationErrors {
    [key: string]: string;
}
