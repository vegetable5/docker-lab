FROM python:3.11-alpine

WORKDIR /app

COPY requirements/ requirements/

RUN pip install -r requirements/backend.in

COPY . .

EXPOSE 8000

CMD ["python", "-m", "spaceship.main"]