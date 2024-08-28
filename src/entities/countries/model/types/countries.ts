export interface CountryData {
    id: string;
    name: {
        ru: string;
        en: string;
    };
}

export interface CountriesSchema {
    isLoading: boolean;
    data: CountryData[];
    error?: string;
}
