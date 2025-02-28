from fastapi import FastAPI

from app.api.router import api_router


API_PREFIX = '/api'


def make_app():
    app = FastAPI()

    app.include_router(api_router, prefix=API_PREFIX)

    return app


app = make_app()
