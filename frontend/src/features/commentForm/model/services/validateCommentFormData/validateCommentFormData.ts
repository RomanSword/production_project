import { IFormData, IValidationErrors, ValidationConfig, processFormWithConfig } from 'shared/lib';

import { CommentForm } from '../../types/commentFormSchema';

const validationConfig: ValidationConfig = {
    text: {
        required: true
    }
};

export function validateCommentData(commentData: CommentForm): IValidationErrors {
    const data: IFormData = {
        text: commentData.text
    };

    return processFormWithConfig(data, validationConfig);
}
