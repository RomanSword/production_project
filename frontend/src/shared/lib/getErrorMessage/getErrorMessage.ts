import { AxiosError } from 'axios';

export const getErrorMessage = (error: AxiosError<Error>): string => {
    let value = 'error';

    if (error.response) {
        if (error.response.data.message) {
            value = error.response.data.message;
        } else if (error.response.statusText) {
            value = `Resource ${error.response.statusText.toLowerCase()}`;
        }
    } else if (error.code) {
        value = error.code;
    }

    return value;
};
