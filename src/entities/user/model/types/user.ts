export interface User {
    id?: string;
    username?: string;
    avatarSrc?: string;
}

export interface UserSchema {
    authData: User;

    _inited: boolean;
}
