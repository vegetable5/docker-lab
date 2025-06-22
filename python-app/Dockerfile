FROM python:3.11-bullseye

WORKDIR /app

COPY . .

RUN pip install -r requirements/backend.in

EXPOSE 8000

CMD ["python", "-m", "spaceship.main"]