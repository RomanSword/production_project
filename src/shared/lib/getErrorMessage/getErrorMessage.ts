import { AxiosError } from 'axios';

export const getErrorMessage = (error: AxiosError<Error>): string => {
    let value = 'error';

    if (error.response) {
        value = error.response.data.message;
    } else if (error.code) {
        value = error.code;
    }

    return value;
};
