# coding=utf-8
from flask import Flask
from flask import request
import json
import sys
import os
import subprocess
import re
from pygit2 import Repository

# Config (@todo: вынести это в отдельный конфигуратор)
config = {
 #   "REPO_FOLDER": "/home/it/web/flant.fox/docs/"
    "REPO_FOLDER": "/app_data/"
}


# Загрузка основы
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
    # Prepare empty answer
    response = {
        "list": [
        ],
        "_meta": {
            "per-page": 9999,
            "page": 1,
            "total-pages": 1
        }
    }
    # Iterate folders in config["REPO_FOLDER"] and find all git repos there
    for x in os.listdir(config["REPO_FOLDER"]):
        folder = config["REPO_FOLDER"] + x
        if os.path.isdir(folder):
            # Communicate to git
            args = ["git", "remote", "-v"]
            p = subprocess.Popen(args, stdout=subprocess.PIPE, cwd=folder)
            out, err = p.communicate()
            # Get remote address from output
            m = re.search("((git|ssh|http(s)?)|(git@[\w\.]+))(:(//)?)([\w\.@\:/\-~]+)(\.git)(/)?", out.decode('utf-8'))
            # Put everything to dictionary
            response["list"].append({
                "name": x,
                "remote": m.group(0)
            })

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
    # TODO: сделать этот метод
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


@app.route('/api/projects/<projectCode>/branches')
def get_branches(projectCode):
    """
    :param projectCode:

    **Response:**
    ```
    ["master","branch1","branch2"]
    ```
    """
    folder = config["REPO_FOLDER"] + projectCode
    response = ["master","branch1","branch2"]


    if not os.path.isdir(folder):
        # TODO: throw exception
        return json.dumps({"error": 404, "description": "Project not found"})

    repo = Repository(folder)
    response = list(repo.branches)
    print(response)

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
