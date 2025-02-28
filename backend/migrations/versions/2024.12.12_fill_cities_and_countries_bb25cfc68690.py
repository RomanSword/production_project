"""fill cities and countries

Revision ID: bb25cfc68690
Revises: 8da28261edde
Create Date: 2024-12-12 07:38:51.283178

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'bb25cfc68690'
down_revision: Union[str, None] = '8da28261edde'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute('''
        INSERT INTO countries (name_ru, name_en) VALUES ('Россия', 'Russia');
        INSERT INTO countries (name_ru, name_en) VALUES ('Беларусь', 'Belarus');
        INSERT INTO countries (name_ru, name_en) VALUES ('Казахстан', 'Kazakhstan');
        INSERT INTO countries (name_ru, name_en) VALUES ('Армения', 'Armenia');
    ''')
    op.execute('''
        INSERT INTO cities (name_ru, name_en, country_id) VALUES ('Москва', 'Moscow', 1);
        INSERT INTO cities (name_ru, name_en, country_id) VALUES ('Санкт-Петербург', 'Saint Petersburg', 1);
        INSERT INTO cities (name_ru, name_en, country_id) VALUES ('Пенза', 'Penza', 1);
        INSERT INTO cities (name_ru, name_en, country_id) VALUES ('Минск', 'Minsk', 2);
        INSERT INTO cities (name_ru, name_en, country_id) VALUES ('Гродно', 'Grodno', 2);
        INSERT INTO cities (name_ru, name_en, country_id) VALUES ('Брест', 'Brest', 2);
        INSERT INTO cities (name_ru, name_en, country_id) VALUES ('Астана', 'Astana', 3);
        INSERT INTO cities (name_ru, name_en, country_id) VALUES ('Алматы', 'Almaty', 3);
        INSERT INTO cities (name_ru, name_en, country_id) VALUES ('Караганда', 'Caraganda', 3);
        INSERT INTO cities (name_ru, name_en, country_id) VALUES ('Ереван', 'Erevan', 4);
        INSERT INTO cities (name_ru, name_en, country_id) VALUES ('Севан', 'Sevan', 4);
        INSERT INTO cities (name_ru, name_en, country_id) VALUES ('Агарак', 'Agarak', 4);
    ''')


def downgrade() -> None:
    op.execute('''
        DELETE FROM countries;
        DELETE FROM cities;
    ''')
