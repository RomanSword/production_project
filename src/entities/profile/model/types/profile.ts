export interface Profile {
    username?: string;
    firstname?: string;
    lastname?: string;
    avatar?: {
        src?: string;
    };
    age?: number;
    city?: string;
    country?: string;
}

export interface ProfileSchema {
    isLoading: boolean;
    readonly: boolean;
    data: Profile;
    formData: Profile;
    error?: string;
}
