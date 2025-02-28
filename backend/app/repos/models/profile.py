from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql import text

from database import intpk, created_at, updated_at, str_200

from .base import Model


class Profile(Model):
    __tablename__ = 'profiles'

    id: Mapped[intpk]
    uuid: Mapped[str] = mapped_column(server_default=text('uuid_generate_v4()'))

    username: Mapped[str_200]
    password: Mapped[str_200]
    firstname: Mapped[str_200]
    lastname: Mapped[str_200]
    age: Mapped[int]
    city_id: Mapped[int] = mapped_column(nullable=True)
    country_id: Mapped[int] = mapped_column(nullable=True)
    cover_src: Mapped[str_200] = mapped_column(nullable=True)
    avatar_src: Mapped[str_200] = mapped_column(nullable=True)
    created_at: Mapped[created_at]
    updated_at: Mapped[updated_at]
