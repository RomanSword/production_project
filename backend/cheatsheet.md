### Как установить и запустить локально
- Установить postgres, создать базу и создать файл .env в корне
- Заполнить переменные в .env файле нужными значениями для доступа к БД
- В корне backend директории выполнить для установки окружения: python3 -m venv venv
- Активировать окружение: source ./venv/bin/activate
- Установить все зависимости в активированном окружении: ./venv/bin/pip3 install -r requirements.txt
- Запустить миграции alembic: ./venv/bin/alembic upgrade head
- Запустить main.py: uvicorn main:app --reload --host 0.0.0.0 --port 80

- Создавать новые миграции: ./venv/bin/alembic revision --autogenerate -m "initial migration"
- Прогнать все миграции до последней: ./venv/bin/alembic upgrade head
- Откатить последнюю миграцию: ./venv/bin/alembic downgrade -1
