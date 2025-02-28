from sqlalchemy import select
from sqlalchemy.orm import Session

from app import dto
from app.repos import models
from app.repos.base import BaseRepo, with_session


class ArticleRepo(BaseRepo):
    model = models.Article

    def _get_query(
        self,
        article_id: int = None
    ):
        query = select(self.model)

        if article_id is not None:
            query = query.filter(self.model.id == article_id)

        return query

    @with_session
    def find_all(
        self,
        session: Session = None
    ) -> list[dto.Article]:
        query = self._get_query()
        result = session.execute(query)

        article_models = result.scalars().all()
        articles = [dto.ArticleModel.model_validate(article_model) for article_model in article_models]

        return articles

    @with_session
    def find(
        self,
        article_id: int = None,
        session: Session = None
    ) -> dto.Article:
        query = self._get_query(article_id)
        result = session.execute(query)
        article_model = result.scalars().first()

        if article_model:
            article = dto.ArticleModel.model_validate(article_model)

            return article

        return None

    @with_session
    def create(
        self,
        data: dto.ArticleForm,
        session: Session = None
    ) -> dto.Article:
        data_dict = data.model_dump()
        result = self.model(**data_dict)

        session.add(result)
        session.flush()

        return dto.ArticleModel.model_validate(result)

    @with_session
    def update(
        self,
        article_id: int | None,
        data: dto.ArticleForm,
        session: Session = None
    ) -> dto.Article | None:
        query = self._get_query(article_id)
        data_dict = data.model_dump(exclude={'id'})
        article_model = session.execute(query).scalars().first()

        if article_model:
            article_model.update(data_dict)

            return dto.ArticleModel.model_validate(article_model)
        
        return None

    @with_session
    def delete(
        self,
        article_id: int | None,
        session: Session = None
    ) -> bool:
        query = self._get_query(article_id)
        article_model = session.execute(query).scalars().first()

        if article_model:
            session.delete(article_model)

            return True
        
        return False