export interface CityData {
    id: string;
    country_id: string;
    name_ru: string;
    name_en: string;
}

export interface CitiesSchema {
    isLoading: boolean;
    data: CityData[];
    error?: string;
}
