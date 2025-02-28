import datetime

from typing import Annotated
from sqlalchemy.orm import sessionmaker, mapped_column, DeclarativeBase
from sqlalchemy import String, create_engine, text

from config import settings


intpk = Annotated[int, mapped_column(primary_key=True)]
created_at = Annotated[datetime.datetime, mapped_column(server_default=text("TIMEZONE('utc', now())"))]
updated_at = Annotated[datetime.datetime, mapped_column(
    server_default=text("TIMEZONE('utc', now())"),
    onupdate=datetime.datetime.now(datetime.timezone.utc)
)]

sync_engine = create_engine(
    url=settings.DATABASE_URL_psycopg,
    pool_pre_ping=True
)

sync_session_factory = sessionmaker(
    sync_engine,
    autoflush=False
)

str_200 = Annotated[str, 200]


class Base(DeclarativeBase):
    type_annotation_map = {
        str_200: String(200)
    }

    repr_cols_num = 3
    repr_cols = tuple()

    def __repr__(self):
        """ Relationships не используются в repr(), т.к. могут вести к неожиданным подгрузкам """
        cols = []

        for idx, col in enumerate(self.__table__.columns.keys()):
            if col in self.repr_cols or idx < self.repr_cols_num:
                cols.append(f"{col}={getattr(self, col)}")

        return f"<{self.__class__.__name__} {', '.join(cols)}>"
