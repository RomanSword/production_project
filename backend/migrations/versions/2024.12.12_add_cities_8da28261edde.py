"""add cities

Revision ID: 8da28261edde
Revises: a8f161d47f90
Create Date: 2024-12-12 07:36:39.849869

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = '8da28261edde'
down_revision: Union[str, None] = 'a8f161d47f90'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table('cities',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name_ru', sa.String(), nullable=False),
        sa.Column('name_en', sa.String(), nullable=False),
        sa.Column('country_id', sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(['country_id'], ['countries.id'], ondelete='CASCADE'),
        sa.PrimaryKeyConstraint('id')
    )


def downgrade() -> None:
    op.drop_table('cities')
