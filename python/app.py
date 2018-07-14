from flask import Flask
import json
app = Flask(__name__)


@app.route('/api/projects')
def list_projects():
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
def hello_name(id):
    response = {
        "id": id,
        "name": "MyProject1",
        "remote": "git@mywebsite.ru:myproject1",
    }
    return json.dumps(response)


if __name__ == '__main__':
    app.run()