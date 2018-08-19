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



#@app.route('/api/projects') TODO: POST METHOD to create projects
#def list_projects():

@app.route('/api/projects/<projectCode>/branches')
def get_branches(projectCode):
    """
    :param projectCode:

    **Response:**
    ```
    ["master","branch1","branch2"]
    ```
    """
    # Set folder
    folder = config["REPO_FOLDER"] + projectCode
    if not os.path.isdir(folder):
        # TODO: throw exception
        return json.dumps({"error": 404, "description": "Project not found"})

    # Get branches from git's repo
    repo = Repository(folder)
    response = list(repo.branches)

    return json.dumps(response)



@app.route('/api/projects/<projectCode>/<branch>/<path:requested_path>/') # TODO: make some method for root path (for example: /api/projects/markdown_ide/master/). Now it doesn't fit to route.
def get_folders(projectCode, branch, requested_path):
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
    # Get path
    requested_path = "/"+requested_path
#    print(requested_path, file=sys.stderr)

    # Set folder
    folder = config["REPO_FOLDER"] + projectCode
    if not os.path.isdir(folder):
        # TODO: throw exception
        return json.dumps({"error": 404, "description": "Project not found"})

    # Checkout branch
    repo = Repository(folder)
    branch = repo.lookup_branch('master')
    ref = repo.lookup_reference(branch.name)
    repo.checkout(ref)
    # TODO: exception if branch not exists

    # Get files it path
    list = []
    for root, dirs, files in os.walk(folder + requested_path):
        for filename in files:
            list.append({
                "name": filename,
                "full_path": root+"/"+filename,
                "parent": root
            })

    response = {
        "list": list,
        "_meta": {
            "per-page": 99999, # TODO: make pagination?
            "page": 1,
            "total-pages": 1
        }
    }
    return json.dumps(response)



@app.route('/api/projects/<projectCode>/<branch>/<filepath>')
def get_file(projectCode, branch, filepath):
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


# TODO POST METHOD FOR creating/editing files POST /api/projects/source/master/<filepath>

# TODO ## GET /api/projects/compare/master..new_branch

# TODO GET /api/projects/merge/from_branch/to_branch

# TODO # GET /api/projects/push

# TODO GET /api/projects/pull


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
