"""add uuid to profile and make password required

Revision ID: bd92b0b7397e
Revises: 881e5881ac92
Create Date: 2024-12-23 21:13:54.177984

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = 'bd92b0b7397e'
down_revision: Union[str, None] = '881e5881ac92'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute('''
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    ''')

    op.add_column(
        'profiles',
        sa.Column(
            'uuid',
            sa.String(),
            server_default=sa.text('uuid_generate_v4()'),
            nullable=False
        )
    )
    op.alter_column(
        'profiles',
        'password',
        existing_type=sa.VARCHAR(),
        nullable=False
    )


def downgrade() -> None:
    op.drop_column('profiles', 'uuid')
    op.alter_column(
        'profiles',
        'password',
        existing_type=sa.VARCHAR(),
        nullable=True
    )
