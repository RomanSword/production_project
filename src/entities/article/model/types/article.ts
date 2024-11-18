export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleBlockImage extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleBlockText extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export interface ArticleBlockCode extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export type ArticleBlock = ArticleBlockImage | ArticleBlockText | ArticleBlockCode;

export enum ArticleType {
    FRONTEND = 'FRONTEND',
    BACKEND = 'BACKEND',
    DESIGN = 'DESIGN',
    IT = 'IT',
    NEWS = 'NEWS',
    GAMES = 'GAMES',
    STRATEGY = 'STRATEGY'
}

export interface Article {
    id?: string;
    title?: string;
    subtitle?: string;
    avatarSrc?: string;
    views?: string;
    createdAt?: string;
    type?: ArticleType[];
    blocks?: ArticleBlock[];
}
