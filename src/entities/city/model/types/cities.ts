export interface CityData {
    id: string;
    country_id: string;
    name: {
        ru: string;
        en: string;
    };
}

export interface CitiesSchema {
    isLoading: boolean;
    data: CityData[];
    error?: string;
}
