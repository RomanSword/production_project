
from fastapi import APIRouter, HTTPException

from app import city_repo
from app.api.endpoints import schemas


router = APIRouter(
    prefix='/cities',
    tags=['Города']
)


@router.get(
    '',
    response_model=schemas.CityListRead
)
def read_cities(
    country_id: int | None
):
    cities = city_repo.find_all(country_id)

    return {
        'cities': cities
    }


@router.get(
    '/{city_id}',
    response_model=schemas.CityRead
)
def read_city(
    city_id: int
):
    city = city_repo.find(city_id)

    if not city:
        raise HTTPException(status_code=404, detail='Not found')

    return {
        'city': city
    }
