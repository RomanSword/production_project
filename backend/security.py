import bcrypt

from authx import AuthX, AuthXConfig

from config import settings


auth_config = AuthXConfig()
auth_config.JWT_SECRET_KEY = settings.JWT_SECRET_KEY
auth_config.JWT_ACCESS_COOKIE_NAME = settings.JWT_ACCESS_COOKIE_NAME
auth_config.JWT_ALGORITHM = settings.JWT_ALGORITHM
auth_config.JWT_TOKEN_LOCATION = ['cookies']

security = AuthX(config=auth_config)


class SecurityPolicy:

    def get_hash_password(
        self,
        password: str
    ) -> str:
        password_hash = bcrypt.hashpw(password.encode('utf8'), bcrypt.gensalt())

        return password_hash.decode('utf8')

    def check_password(
        self,
        password: str,
        hashed_password: str
    ) -> bool:
        expected_hash = hashed_password.encode('utf8')
        is_checked = bcrypt.checkpw(password.encode('utf8'), expected_hash)

        return is_checked
