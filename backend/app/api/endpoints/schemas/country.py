from pydantic import BaseModel


class CountryReadItem(BaseModel):
    id: int
    name_ru: str
    name_en: str


class CountryListRead(BaseModel):
    countries: list[CountryReadItem]


class CountryRead(BaseModel):
    country: CountryReadItem
