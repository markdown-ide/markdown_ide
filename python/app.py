# coding=utf-8
from flask import Flask
import json
app = Flask(__name__)


@app.route('/')
def root():
    return "please send requests to API only"

@app.route('/api/projects')
def list_projects():
    """
    :return: json со списком проектов

    **Response:**
    ```
    {
        "list": [
            {
                "name": "MyProject1",
                "remote": "git@mywebsite.ru:myproject1",
            }
        ],
        "_meta": {
            "per-page": 12,
            "page": 12,
            "total-pages": 12
        }
    }
    ```
    """
    response = {
        "list": [
            {
                "name": "MyProject1",
                "remote": "git@mywebsite.ru:myproject1",
            }
        ],
        "_meta": {
            "per-page": 12,
            "page": 12,
            "total-pages": 12
        }
    }
    return json.dumps(response)

@app.route('/api/projects/<id>')
def get_project(id):
    """
    :param id: идентификатор проекта
    :return: json с описанием объекта

    **Response:**
    ```
    {
        "name": "MyProject1",
        "remote": "git@mywebsite.ru:myproject1",
    }
    ```
    """
    response = {
        "id": id,
        "name": "MyProject1",
        "remote": "git@mywebsite.ru:myproject1",
    }
    return json.dumps(response)


if __name__ == '__main__':
    app.run(host='0.0.0.0')