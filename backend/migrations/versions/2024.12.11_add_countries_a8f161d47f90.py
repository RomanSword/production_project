"""add countries

Revision ID: a8f161d47f90
Revises: c88697c1e8e8
Create Date: 2024-12-11 07:33:40.543268

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = 'a8f161d47f90'
down_revision: Union[str, None] = 'c88697c1e8e8'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table('countries',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name_ru', sa.String(), nullable=False),
        sa.Column('name_en', sa.String(), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )


def downgrade() -> None:
    op.drop_table('countries')
