import axios from 'axios';

import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';

export const api = axios.create({
    baseURL: __BASE_URL__
});

api.interceptors.request.use(function (config) {
    const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';

    if (user) {
        let userParsed;

        try {
            userParsed = JSON.parse(user);
        } catch (error) {
            console.log('Error while parsing localstorage user: ', error);
        }

        if (userParsed) {
            config.headers.Authorization = `Bearer ${userParsed.id}`;
        }
    }

    return config;
});
