"""add article model

Revision ID: 93c7191dc98a
Revises: bb25cfc68690
Create Date: 2024-12-14 22:45:11.331592

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = '93c7191dc98a'
down_revision: Union[str, None] = 'bb25cfc68690'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table('articles',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('title', sa.String(), nullable=False),
        sa.Column('subtitle', sa.String(), nullable=False),
        sa.Column('cover_src', sa.String(), nullable=True),
        sa.Column('tags', sa.String(), nullable=False),
        sa.Column('blocks', sa.JSON(), nullable=True),
        sa.Column('views', sa.Integer(), server_default='0', nullable=False),
        sa.Column('created_at', sa.DateTime(), server_default=sa.text("TIMEZONE('utc', now())"), nullable=False),
        sa.Column('updated_at', sa.DateTime(), server_default=sa.text("TIMEZONE('utc', now())"), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )


def downgrade() -> None:
    op.drop_table('articles')
