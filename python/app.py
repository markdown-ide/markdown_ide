# coding=utf-8
from flask import Flask
from flask import request
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

@app.route('/api/projects/<projectCode>/<branch>/folder')
def get_folders(projectCode, branch):
    """
    :projectCode: идентификатор проекта
    :branch: необходимая ветка
    :folderPath: GET параметр путь к папке, получить через request.args.get('folderPath')

    **Response:**
    ```
    {
        "list": [
            {
                "name": "myfile.md",
                "full_path": "/folder/myfile.md",
                "parent": "/folder/"
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
                "name": "myfile.md",
                "full_path": "/folder/myfile.md",
                "parent": "/folder/"
            }
        ],
        "_meta": {
            "per-page": 12,
            "page": 12,
            "total-pages": 12
        }
    }
    return json.dumps(response)

@app.route('/api/projects/<projectCode>/<branch>/file')
def get_file(projectCode, branch):
    """
    :projectCode: идентификатор проекта
    :branch: необходимая ветка
    :folderPath: GET параметр путь к папке, получить через request.args.get('filePath')

    **Response:**
    ```
    {
        "name": "myfile.md",
        "full_path": "/folder/myfile.md",
        "parent": "/folder/",
        "attributes": {
            "attrib1": "val1",
            "attrib2": "val2",
            "attrib3": 123,
            "attrib4": [
                "one", "two"
            ],
            "attrib5": "true",
            "attrib6": "false"
        },
        "text": "many many many many many words in text"
    }
    ```
    """
    response = {
        "name": "myfile.md",
        "full_path": "/folder/myfile.md",
        "parent": "/folder/",
        "attributes": {
            "attrib1": "val1",
            "attrib2": "val2",
            "attrib3": 123,
            "attrib4": [
                "one", "two"
            ],
            "attrib5": "true",
            "attrib6": "false"
        },
        "text": "many many many many many words in text"
    }

    return json.dumps(response)


if __name__ == '__main__':
    app.run(host='0.0.0.0')