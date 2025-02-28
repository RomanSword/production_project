from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import ForeignKey

from database import intpk, str_200

from .base import Model


class City(Model):
    __tablename__ = 'cities'

    id: Mapped[intpk]

    name_ru: Mapped[str_200]
    name_en: Mapped[str_200]

    country_id: Mapped[int] = mapped_column(ForeignKey('countries.id', ondelete='CASCADE'))
