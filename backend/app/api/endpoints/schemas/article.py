from datetime import datetime
from pydantic import BaseModel


class ArticleForm(BaseModel):
    title: str
    subtitle: str
    cover_src: str | None
    tags: str
    blocks: list[dict]


class ArticleReadBase(ArticleForm):
    id: int
    views: int
    created_at: datetime
    updated_at: datetime | None


class ArticleListRead(BaseModel):
    articles: list[ArticleReadBase]


class ArticleRead(BaseModel):
    article: ArticleReadBase


class ArticleWrite(BaseModel):
    article: ArticleForm
