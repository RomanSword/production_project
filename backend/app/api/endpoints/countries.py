from fastapi import APIRouter, HTTPException

from app import country_repo
from app.api.endpoints import schemas


router = APIRouter(
    prefix='/countries',
    tags=['Страны']
)


@router.get(
    '',
    response_model=schemas.CountryListRead
)
def read_countries():
    countries = country_repo.find_all()

    return {
        'countries': countries
    }


@router.get(
    '/{country_id}',
    response_model=schemas.CountryRead
)
def read_country(
    country_id: int
):
    country = country_repo.find(country_id)

    if not country:
        raise HTTPException(status_code=404, detail='Not found')

    return {
        'country': country
    }
