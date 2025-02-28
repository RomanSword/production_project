from datetime import datetime
from pydantic import BaseModel, ConfigDict


class ArticleForm(BaseModel):
    title: str
    subtitle: str
    cover_src: str | None
    tags: str
    blocks: list | None
    views: int
    created_at: datetime | None
    updated_at: datetime | None


class Article(ArticleForm):
    id: int


class ArticleModel(ArticleForm):
    id: int

    model_config = ConfigDict(from_attributes=True)
