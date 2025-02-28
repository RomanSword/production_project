from pydantic import BaseModel


class CityReadItem(BaseModel):
    id: int
    name_ru: str
    name_en: str
    country_id: int


class CityListRead(BaseModel):
    cities: list[CityReadItem]


class CityRead(BaseModel):
    city: CityReadItem
