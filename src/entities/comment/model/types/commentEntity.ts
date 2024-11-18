import { User } from 'entities/user';

export interface CommentEntity {
    id: string;
    text: string;
    user: User;
}
