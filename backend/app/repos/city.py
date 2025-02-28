from sqlalchemy import select
from sqlalchemy.orm import Session

from app import dto
from app.repos import models
from app.repos.base import BaseRepo, with_session


class CityRepo(BaseRepo):
    model = models.City
    dto_class = dto.City

    @with_session
    def find_all(
        self,
        country_id: int = None,
        session: Session = None
    ) -> list[dto.City]:
        query = select(self.model)

        if country_id is not None:
            query = query.filter(self.model.country_id == country_id)

        result = session.execute(query)

        cities_models = result.scalars().all()
        cities = [dto.CityModel.model_validate(cities_model) for cities_model in cities_models]

        return cities

    @with_session
    def find(
        self,
        city_id: int,
        session: Session = None
    ) -> dto.City:
        query = select(self.model).filter(self.model.id == city_id)
        result = session.execute(query)
        city_model = result.scalars().first()

        if city_model:
            city = dto.CityModel.model_validate(city_model)

            return city
        
        return None
