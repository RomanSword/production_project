from app import repos
from database import sync_session_factory

from security import SecurityPolicy


# General
security_policy = SecurityPolicy()

# Repos
article_repo = repos.ArticleRepo(sync_session_factory)
city_repo = repos.CityRepo(sync_session_factory)
country_repo = repos.CountryRepo(sync_session_factory)
profile_repo = repos.ProfileRepo(sync_session_factory, security_policy)
comment_repo = repos.CommentRepo(sync_session_factory, profile_repo)
