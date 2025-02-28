export interface CommentForm {
    text: string;
    id?: string;
}

export interface CommentFormSchema {
    id: string;
    text: string;
    isLoading: boolean;
    error: string;
}
