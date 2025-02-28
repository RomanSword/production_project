export interface CountryData {
    id: string;
    name_ru: string;
    name_en: string;
}

export interface CountriesSchema {
    isLoading: boolean;
    data: CountryData[];
    error?: string;
}
