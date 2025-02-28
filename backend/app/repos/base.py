# Декоратор сессии
def with_session(f):
    def wrapper(*args, **kw):
        # Если сессия передана принудительно - не создаем
        if 'session' in kw:
            return f(*args, **kw)
        else:
            with args[0].db_session_factory.begin() as session:
                res = f(*args, **kw, session=session)
                return res

    return wrapper


LANGUAGES = ['ru', 'en']


class BaseRepo:
    @property
    def model(self):
        ...

    @property
    def dto_class(self):
        ...

    def __init__(
        self,
        db_session_factory,
        field_name = 'name'
    ):
        self.field_name = field_name
        self.db_session_factory = db_session_factory

    def translate_items(
        self,
        items: list,
        language: str = LANGUAGES[0]
    ) -> list:
        results = []
        result_language = language

        if result_language not in LANGUAGES:
            result_language = LANGUAGES[0]

        for item in items:
            intial = item.model_dump()
            result = {}

            for key in intial:
                if self.field_name not in key:
                    result[key] = intial[key]

            result[self.field_name] = intial.get(f'{self.field_name}_{result_language}')

            results.append(self.dto_class(**result))

        return results
    
    def translate_item(
        self,
        item,
        language: str = LANGUAGES[0]
    ):
        results = self.translate_items([item], language)

        return results[0]
