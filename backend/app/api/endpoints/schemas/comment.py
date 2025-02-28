

from datetime import datetime
from pydantic import BaseModel, Field, field_validator

from app import article_repo
from app import dto


errors = {
    'not_found': 'Указанная статья не найдена',
}


class CommentForm(BaseModel):
    text: str
    article_id: int

    @field_validator('article_id')
    @classmethod
    def validate_article_id(cls, value: int):
        if not article_repo.find(value):
            raise ValueError(errors['not_found'])

        return value


class CommentReadBase(CommentForm):
    id: int
    profile: dto.ProfileMinified
    created_at: datetime | None
    updated_at: datetime | None


class CommentListRead(BaseModel):
    comments: list[CommentReadBase]


class CommentRead(BaseModel):
    comment: CommentReadBase


class CommentWrite(BaseModel):
    comment: CommentForm
