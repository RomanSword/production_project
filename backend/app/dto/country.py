from pydantic import BaseModel, ConfigDict


class Country(BaseModel):
    id: int

    name: str


class CountryModel(BaseModel):
    id: int

    name_ru: str
    name_en: str
    model_config = ConfigDict(from_attributes=True)
