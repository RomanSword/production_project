export interface Profile {
    username?: string;
    firstname?: string;
    lastname?: string;
    avatarSrc?: string;
    coverSrc?: string;
    age?: number;
    country_id?: string;
    country?: { id: string; name: { ru: string; en: string } };
    city_id?: string;
    city?: { id: string; country_id: string; name: { ru: string; en: string } };
}

export interface ProfileSchema {
    isLoading: boolean;
    isEdited: boolean;
    readonly: boolean;
    data: Profile;
    formData: Profile;
    error?: string;
}
