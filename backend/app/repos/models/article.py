from sqlalchemy import JSON
from sqlalchemy.orm import Mapped, mapped_column

from database import intpk, created_at, updated_at, str_200

from .base import Model


class Article(Model):
    __tablename__ = 'articles'

    id: Mapped[intpk]

    title: Mapped[str_200]
    subtitle: Mapped[str_200]
    cover_src: Mapped[str_200] = mapped_column(nullable=True)
    tags: Mapped[str_200]
    blocks: Mapped[list | None] = mapped_column(JSON)
    views: Mapped[int] = mapped_column(server_default='0', nullable=False)
    created_at: Mapped[created_at]
    updated_at: Mapped[updated_at]
