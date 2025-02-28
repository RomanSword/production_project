from sqlalchemy.orm import DeclarativeBase


class Model(DeclarativeBase):
    
    def as_dict(self, fields=[]):
        if not fields:
            fields = set(filter(lambda x: not x.startswith('_'), self.__dict__.keys()))

        result = {}

        for field_name in fields:
            attr = getattr(self, field_name)

            # Если нет attr.__dict__, то релейшен еще не загружен
            if hasattr(attr, '__dict__') and hasattr(attr, 'as_dict') and attr.__dict__:
                result[field_name] = attr.as_dict()
            else:
                result[field_name] = attr

        return result

    def update(self, data: dict):
        for field, value in data.items():
            if hasattr(self, field):
                setattr(self, field, value)
