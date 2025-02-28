import jwt

from fastapi import HTTPException, Request

from app import profile_repo
from config import settings


def get_uuid_from_token(value: str) -> str | None:
    result = None

    if value:
        try:
            token_dict = jwt.decode(
                value,
                algorithms=settings.JWT_ALGORITHM,
                verify=True,
                key=settings.JWT_SECRET_KEY
            )

            return token_dict.get('sub')
        except Exception as exc:
            print('Получена ошибка при авторизации запроса')
            print(exc)

            return None

    return result


def authorized(request: Request):
    token = request.cookies.get('auth_token')

    if profile_repo.find_is_exists(get_uuid_from_token(token)):
        pass
    else:
        raise HTTPException(status_code=401, detail='Требуется авторизация')
