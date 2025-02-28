import { CountryData } from 'entities/countries';
import { CityData } from 'entities/city';

export enum ErrorCodes {
    forbidden = 403,
    notFound = 404,
    unprocessableContent = 422
}

export type CountryChangeArgs = {
    value: CountryData;
};

export type CityChangeArgs = {
    value: CityData;
};
