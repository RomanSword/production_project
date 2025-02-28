from pydantic import BaseModel, ConfigDict


class City(BaseModel):
    id: int

    name: str

    country_id: int | None


class CityModel(BaseModel):
    id: int

    name_ru: str
    name_en: str

    country_id: int | None

    model_config = ConfigDict(from_attributes=True)
