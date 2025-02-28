from fastapi import APIRouter

from app.api.endpoints import health, articles, auth, profiles, countries, comments, cities


api_router = APIRouter()

api_router.include_router(articles.router)
api_router.include_router(auth.router)
api_router.include_router(comments.router)
api_router.include_router(countries.router)
api_router.include_router(cities.router)
api_router.include_router(health.router)
api_router.include_router(profiles.router)
