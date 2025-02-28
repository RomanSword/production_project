# from database import sync_session_factory, TaskOrm
# from sqlalchemy import select

# from server.app.repos.models.tasks import STask, STaskAdd


# class TaskRepository:
#     @classmethod
#     async def add_one(cls, data: STaskAdd) -> STask:
#         async with sync_session_factory() as session:
#             data_dict = data.model_dump()

#             task = TaskOrm(**data_dict)
#             session.add(task)
#             await session.flush()
#             await session.commit()

#             return task

#     @classmethod
#     async def find_all(cls) -> list[STask]:
#         async with sync_session_factory() as session:
#             query = select(TaskOrm)
#             result = await session.execute(query)
#             task_models = result.scalars().all()
#             task_schemas = [STask.model_validate(task_model) for task_model in task_models]

#             return task_schemas
