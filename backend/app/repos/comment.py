from sqlalchemy import select
from sqlalchemy.orm import Session

from app import dto

from .base import BaseRepo, with_session
from .models.comment import Comment


class CommentRepo(BaseRepo):
    model = Comment

    def __init__(
        self,
        db_session_factory,
        profile_repo
    ):
        self.db_session_factory = db_session_factory
        self.profile_repo = profile_repo

    def _get_query(
        self,
        comment_id: int = None,
        article_id: int = None
    ):
        query = select(self.model)

        if comment_id is not None:
            query = query.filter(self.model.id == comment_id)

        if article_id is not None:
            query = query.filter(self.model.article_id == article_id)

        return query

    def _set_profile(
        self,
        profile_id: int,
        comment: dto.CommentModel
    ) -> dto.CommentModel:
        comment.profile = self.profile_repo.find(profile_id, None, True)

        return comment

    @with_session
    def find_all(
        self,
        profile_id: int,
        article_id: int = None,
        session: Session = None
    ) -> list[dto.CommentModel]:
        query = self._get_query(None, article_id)
        result = session.execute(query)

        comment_models = result.scalars().all()
        comments = []

        for comment_model in comment_models:
            comment = dto.Comment(
                **comment_model.as_dict(),
                profile=None
            )
            self._set_profile(profile_id, comment)

            comments.append(comment)

        return comments

    @with_session
    def find(
        self,
        profile_id: int,
        comment_id: int,
        session: Session = None
    ) -> dto.CommentModel:
        query = self._get_query(comment_id)
        result = session.execute(query)
        comment_model = result.scalars().first()

        if comment_model:
            comment = dto.Comment(
                **comment_model.as_dict(),
                profile=None
            )

            return self._set_profile(profile_id, comment)

        return None

    @with_session
    def create(
        self,
        profile_id: int,
        data: dto.CommentForm,
        session: Session = None
    ) -> dto.Comment:
        data_dict = data.model_dump()
        result = self.model(**data_dict, profile_id=profile_id)

        session.add(result)
        session.flush()

        comment = dto.Comment(
            **result.as_dict(),
            profile=None,
        )

        return self._set_profile(profile_id, comment)

    @with_session
    def update(
        self,
        profile_id: int,
        comment_id: int,
        data: dto.CommentForm,
        session: Session = None
    ) -> dto.CommentModel | None:
        query = self._get_query(comment_id)
        data_dict = data.model_dump(exclude={'id'})
        comment_model = session.execute(query).scalars().first()

        if comment_model:
            comment_model.update(data_dict)
            comment = dto.Comment(
                **comment_model.as_dict(),
                profile=None,
            )

            return self._set_profile(profile_id, comment)

        return None

    @with_session
    def delete(
        self,
        comment_id: int | None,
        session: Session = None
    ) -> bool:
        query = self._get_query(comment_id)
        comment_model = session.execute(query).scalars().first()

        if comment_model:
            session.delete(comment_model)

            return True
        
        return False