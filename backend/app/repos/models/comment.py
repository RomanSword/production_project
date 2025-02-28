from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import ForeignKey

from database import intpk, created_at, updated_at

from .base import Model


class Comment(Model):
    __tablename__ = 'comments'

    id: Mapped[intpk]
    text: Mapped[str]

    created_at: Mapped[created_at]
    updated_at: Mapped[updated_at]

    article_id: Mapped[int] = mapped_column(ForeignKey('articles.id', ondelete='CASCADE'))
    profile_id: Mapped[int] = mapped_column(ForeignKey('profiles.id'))
