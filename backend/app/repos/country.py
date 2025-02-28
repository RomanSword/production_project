from sqlalchemy import select
from sqlalchemy.orm import Session

from app import dto
from app.repos import models
from app.repos.base import BaseRepo, with_session


class CountryRepo(BaseRepo):
    model = models.Country
    dto_class = dto.Country

    @with_session
    def find_all(
        self,
        session: Session = None
    ) -> list[dto.Country]:
        query = select(self.model)

        result = session.execute(query)

        countries_models = result.scalars().all()
        countries = [dto.CountryModel.model_validate(countries_model) for countries_model in countries_models]

        return countries

    @with_session
    def find(
        self,
        country_id: int,
        session: Session = None
    ) -> dto.Country:
        query = select(self.model).filter(self.model.id == country_id)
        result = session.execute(query)
        country_model = result.scalars().first()

        if country_model:
            country = dto.CountryModel.model_validate(country_model)

            return country
        
        return None
