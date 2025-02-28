from datetime import datetime
from pydantic import BaseModel, ConfigDict


class ProfileForm(BaseModel):
    username: str
    firstname: str
    lastname: str
    age: int
    city_id: int | None
    country_id: int | None
    cover_src: str | None
    avatar_src: str | None
    created_at: datetime | None
    updated_at: datetime | None


class Profile(ProfileForm):
    id: int
    uuid: str


class ProfileMinified(BaseModel):
    id: int
    firstname: str
    lastname: str
    avatar_src: str


class ProfileMinifiedModel(ProfileMinified):
    model_config = ConfigDict(from_attributes=True)


class ProfileModel(ProfileForm):
    id: int
    uuid: str

    model_config = ConfigDict(from_attributes=True)
