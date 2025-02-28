from fastapi import APIRouter, HTTPException, Response

from app import profile_repo
from app.api.endpoints import schemas
from security import security
from config import settings


router = APIRouter(
    prefix='/auth',
    tags=['Авторизация']
)

errors = {
    'not_found': 'Пользователь с таким логином или паролем не найден'
}


@router.post(
    '/login',
    response_model=schemas.AuthLogin
)
def login(
    form: schemas.AuthLoginForm,
    response: Response
):
    profile = profile_repo.find_authorized(form.username, form.password)

    if profile is None:
        raise HTTPException(status_code=401, detail=errors['not_found'])

    token = security.create_access_token(uid=profile.uuid, fresh=True)
    response.set_cookie(settings.JWT_ACCESS_COOKIE_NAME, token)

    return {
        'id': profile.id,
        'firstname': profile.firstname
    }


@router.delete(
    '/logout',
)
def logout(
    response: Response
):
    response.delete_cookie(settings.JWT_ACCESS_COOKIE_NAME)

    return {}