from fastapi import APIRouter, Depends, HTTPException

from app import article_repo
from app.api.endpoints import schemas
from middleware import authorized


router = APIRouter(
    prefix='/articles',
    tags=['Статьи']
)


@router.get(
    '/',
    response_model=schemas.ArticleListRead
)
def read_articles():
    articles = article_repo.find_all()

    return {
        'articles': articles
    }


@router.get(
    '/{article_id}',
    response_model=schemas.ArticleRead
)
def read_article(
    article_id: int,
):
    article = article_repo.find(article_id)

    if not article:
        raise HTTPException(status_code=404, detail='Not found')

    return {
        'article': article
    }


@router.post(
    '/',
    response_model=schemas.ArticleRead,
    dependencies=[Depends(authorized)]
)
def create_article(
    form: schemas.ArticleWrite,
):
    article = article_repo.create(form.article)

    return {
        'article': article
    }


@router.put(
    '/{article_id}',
    response_model=schemas.ArticleRead,
    dependencies=[Depends(authorized)]
)
def update_article(
    article_id: int,
    form: schemas.ArticleWrite,
):
    article = article_repo.update(article_id, form.article)

    if not article:
        raise HTTPException(status_code=404, detail='Not found')

    return {
        'article': article
    }

@router.delete(
    '/{article_id}',
    dependencies=[Depends(authorized)]
)
def delete_article(
    article_id: int
):
    result = article_repo.delete(article_id)

    if not result:
        raise HTTPException(status_code=404, detail='Not found')

    return {}
