from fastapi import APIRouter, HTTPException, Depends

from app import comment_repo
from app.api.endpoints import schemas
from middleware import authorized


router = APIRouter(
    prefix='/comments',
    tags=['Комментарии']
)


@router.get(
    '/',
    response_model=schemas.CommentListRead
)
def read_comments(
    article_id: int
):
    profile_id = 0
    comments = comment_repo.find_all(profile_id, article_id)

    return {
        'comments': comments
    }


@router.get(
    '/{comment_id}',
    response_model=schemas.CommentRead
)
def read_comment(
    comment_id: int
):
    profile_id = 0
    comment = comment_repo.find(profile_id, comment_id)

    if not comment:
        raise HTTPException(status_code=404, detail='Not found')

    return {
        'comment': comment
    }


@router.post(
    '/',
    response_model=schemas.CommentRead,
    dependencies=[Depends(authorized)]
)
def create_comment(
    form: schemas.CommentWrite
):
    profile_id = 0
    comment = comment_repo.create(profile_id, form.comment)

    return {
        'comment': comment
    }


@router.put(
    '/{comment_id}',
    response_model=schemas.CommentRead,
    dependencies=[Depends(authorized)]
)
def update_comment(
    comment_id: int,
    form: schemas.CommentWrite
):
    profile_id = 0
    comment = comment_repo.update(profile_id, comment_id, form.comment)

    if not comment:
        raise HTTPException(status_code=404, detail='Not found')

    return {
        'comment': comment
    }

@router.delete(
    '/{comment_id}',
    dependencies=[Depends(authorized)]
)
def delete_comment(
    comment_id: int
):
    result = comment_repo.delete(comment_id)

    if not result:
        raise HTTPException(status_code=404, detail='Not found')

    return {}
