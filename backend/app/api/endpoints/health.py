from fastapi import APIRouter


router = APIRouter(
    tags=['Проверка работоспособности']
)


@router.get('/health-check')
def health_check():
    return 'alive'
