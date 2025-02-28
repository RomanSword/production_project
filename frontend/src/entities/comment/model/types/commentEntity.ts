import { Profile } from 'entities/profile';

export interface CommentEntity {
    id: string;
    text: string;
    profile: Profile;
}
