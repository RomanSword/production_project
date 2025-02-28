from fastapi import APIRouter, HTTPException, Depends

from app import profile_repo, country_repo, city_repo
from app.api.endpoints import schemas
from middleware import authorized


router = APIRouter(
    prefix='/profiles',
    tags=['Профили']
)


@router.get(
    '/',
    response_model=schemas.ProfileListRead
)
def read_profiles():
    profiles = profile_repo.find_all()

    return {
        'profiles': profiles
    }


@router.get(
    '/{profile_id}',
    response_model=schemas.ProfileRead
)
def read_profile(
    profile_id: int,
):
    profile = profile_repo.find(profile_id).model_dump()

    if not profile:
        raise HTTPException(status_code=404, detail='Not found')

    profile['country'] = country_repo.find(profile['country_id'])
    profile['city'] = city_repo.find(profile['city_id'])

    return {
        'profile': profile
    }


@router.post(
    '/',
    response_model=schemas.ProfileRead,
    dependencies=[Depends(authorized)]
)
def create_profile(
    form: schemas.ProfileWrite,
):
    profile = profile_repo.create(form.profile)

    return {
        'profile': profile
    }


@router.put(
    '/{profile_id}',
    response_model=schemas.ProfileRead,
    dependencies=[Depends(authorized)]
)
def update_profile(
    profile_id: int,
    form: schemas.ProfileWrite,
):
    profile = profile_repo.update(profile_id, form.profile)

    if not profile:
        raise HTTPException(status_code=404, detail='Not found')

    profile = profile.model_dump()
    profile['country'] = country_repo.find(profile['country_id'])
    profile['city'] = city_repo.find(profile['city_id'])

    return {
        'profile': profile
    }

@router.delete(
    '/{profile_id}',
    dependencies=[Depends(authorized)]
)
def delete_profile(
    profile_id: int
):
    result = profile_repo.delete(profile_id)

    if not result:
        raise HTTPException(status_code=404, detail='Not found')

    return {}