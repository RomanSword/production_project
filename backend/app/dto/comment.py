from datetime import datetime
from pydantic import BaseModel, ConfigDict

from .profile import ProfileMinified


class CommentForm(BaseModel):
    text: str
    article_id: int
    profile_id: int | None


class Comment(CommentForm):
    id: int

    created_at: datetime | None
    updated_at: datetime | None

    profile: ProfileMinified | None


class CommentModel(CommentForm):
    id: int

    model_config = ConfigDict(from_attributes=True)
