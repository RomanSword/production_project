from fastapi import APIRouter, Depends

from typing import Annotated

from server.app.repos.tasks import TaskRepository
from server.app.repos.models.tasks import STask, STaskAdd


router = APIRouter(
    prefix='/tasks',
    tags=['Таски']
)


@router.get('/')
async def get_tasks() -> list[STask]:
    tasks = await TaskRepository.find_all()

    return tasks


@router.post('/')
async def add_task(
    task: Annotated[STaskAdd, Depends()]
) -> STask:
    task = await TaskRepository.add_one(task)

    return task
