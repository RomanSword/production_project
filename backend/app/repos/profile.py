from sqlalchemy import select
from sqlalchemy.orm import Session

from app import dto
from app.repos import models
from app.repos.base import BaseRepo, with_session

from security import SecurityPolicy


class ProfileRepo(BaseRepo):
    model = models.Profile

    def __init__(
        self,
        db_session_factory,
        security_policy: SecurityPolicy
    ):
        self.db_session_factory = db_session_factory
        self.security_policy = security_policy

    def _get_query(
        self,
        profile_id: int = None,
        username: str = None,
        uuid: str = None
    ):
        query = select(self.model)

        if profile_id is not None:
            query = query.filter(self.model.id == profile_id)

        if username is not None:
            query = query.filter(self.model.username == username)

        if uuid is not None:
            query = query.filter(self.model.uuid == uuid)

        return query

    @with_session
    def find_all(
        self,
        session: Session = None
    ) -> list[dto.Profile]:
        query = self._get_query()
        result = session.execute(query)

        profile_models = result.scalars().all()
        profiles = [dto.ProfileModel.model_validate(profile_model) for profile_model in profile_models]

        return profiles

    @with_session
    def find(
        self,
        profile_id: int = None,
        username: str = None,
        is_minified: bool = False,
        session: Session = None
    ) -> dto.Profile | dto.ProfileMinified | None:
        query = self._get_query(profile_id, username)
        result = session.execute(query)
        profile_model = result.scalars().first()

        if profile_model:
            if is_minified:
                profile = dto.ProfileMinifiedModel.model_validate(profile_model)
            else:
                profile = dto.ProfileModel.model_validate(profile_model)

            return profile

        return None

    @with_session
    def find_authorized(
        self,
        username: str,
        password: str,
        session: Session = None
    ) -> dto.Profile | None:
        query = self._get_query(None, username)
        result = session.execute(query)
        profile_model = result.scalars().first()

        if profile_model is None or not self.security_policy.check_password(
            password,
            profile_model.password
        ):
            return None

        return dto.ProfileModel.model_validate(profile_model)

    @with_session
    def find_is_exists(
        self,
        uuid: str | None,
        session: Session = None
    ) -> bool:
        if not uuid:
            return False

        query = self._get_query(None, None, uuid)
        result = session.execute(query)
        profile_model = result.scalars().first()

        return profile_model is not None

    @with_session
    def create(
        self,
        data: dto.ProfileForm,
        session: Session = None
    ) -> dto.Profile:
        data_dict = data.model_dump()
        result = self.model(**data_dict)

        session.add(result)
        session.flush()

        return dto.ProfileModel.model_validate(result)

    @with_session
    def update(
        self,
        profile_id: int | None,
        data: dto.ProfileForm,
        session: Session = None
    ) -> dto.Profile | None:
        query = self._get_query(profile_id)
        profile_model = session.execute(query).scalars().first()

        if profile_model:
            data_dict = data.model_dump(exclude={'id'})
            profile_model.update(data_dict)

            return dto.ProfileModel.model_validate(profile_model)
        
        return None

    @with_session
    def delete(
        self,
        profile_id: int | None,
        session: Session = None
    ) -> bool:
        query = self._get_query(profile_id)
        profile_model = session.execute(query).scalars().first()

        if profile_model:
            session.delete(profile_model)

            return True
        
        return False