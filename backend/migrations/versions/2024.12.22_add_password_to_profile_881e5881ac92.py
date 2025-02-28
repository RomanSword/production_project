"""add password to profile

Revision ID: 881e5881ac92
Revises: 0db9cafd4750
Create Date: 2024-12-22 22:05:53.062018

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = '881e5881ac92'
down_revision: Union[str, None] = '0db9cafd4750'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column('profiles', sa.Column('password', sa.String(), nullable=True))


def downgrade() -> None:
    op.drop_column('profiles', 'password')
