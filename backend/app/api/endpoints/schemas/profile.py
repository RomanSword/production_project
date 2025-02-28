from datetime import datetime
from pydantic import BaseModel, Field, field_validator, model_validator

from app import profile_repo, country_repo, city_repo
from app.api.endpoints.schemas.city import CityReadItem
from app.api.endpoints.schemas.country import CountryReadItem


errors = {
    'already_taken': 'Указанный псевдоним уже занят',
    'country_not_found': 'Указанная в профиле страна не найдена',
    'city_not_found': 'Указанный в профиле город не найден'
}


class ProfileBase(BaseModel):
    username: str
    firstname: str
    lastname: str
    age: int
    country_id: int | None
    city_id: int | None
    cover_src: str | None
    avatar_src: str | None


class ProfileForm(ProfileBase):
    age: int = Field(ge=15, le=80, description='Возраст может быть от 15 до 80 лет')

    @field_validator('country_id')
    def validate_country_id(cls, value: int):
        if not country_repo.find(value):
            raise ValueError(errors['country_not_found'])

        return value

    @field_validator('city_id')
    @classmethod
    def validate_city_id(cls, value: int):
        if not city_repo.find(value):
            raise ValueError(errors['city_not_found'])

        return value
    
    @model_validator(mode='after')
    def validate(self):
        profile = profile_repo.find(None, self.username)

        if profile and profile.username != self.username:
            raise ValueError(errors['already_taken'])

        return self


class ProfileItem(ProfileBase):
    id: int
    created_at: datetime | None
    updated_at: datetime | None


class ProfileItemExtended(ProfileItem):
    city: CityReadItem
    country: CountryReadItem


class ProfileListRead(BaseModel):
    profiles: list[ProfileItem]


class ProfileRead(BaseModel):
    profile: ProfileItemExtended


class ProfileWrite(BaseModel):
    profile: ProfileForm
