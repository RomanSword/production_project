from sqlalchemy.orm import Mapped

from database import intpk, str_200

from .base import Model


class Country(Model):
    __tablename__ = 'countries'

    id: Mapped[intpk]

    name_ru: Mapped[str_200]
    name_en: Mapped[str_200]
