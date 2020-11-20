# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.8.6-buster

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install pip requirements
ADD requirements.txt .
RUN pip install -r requirements.txt

WORKDIR /app
COPY . /app/

# Switching to a non-root user, please refer to https://aka.ms/vscode-docker-python-user-rights
RUN useradd appuser && chown -R appuser /app
USER appuser

EXPOSE 8000

CMD ["python","manage.py","runserver", "0.0.0.0:8000", "--insecure"]