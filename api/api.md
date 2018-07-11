# /api/projects

## GET /api/projects

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

## GET /api/projects/<id>

**Response:**

```
{
    "name": "MyProject1",
    "remote": "git@mywebsite.ru:myproject1",
}
```

## POST /api/projects

**Request params:**

- name - MyProject1
- remote - git@mywebsite.ru:repo

**Response:**

same as `GET /api/projects/<id>`

# /api/projects/source

## GET /api/projects/source/master/<filepath>/ (folder)

**Request params:**

- page - optional - 1
- per-page - optional- 12
- include-children - optional - 0 или 1

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

## GET /api/projects/source/master/<filepath>/<myfile>


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
        "attrib5": true,
        "attrib6": false
    },
    "text": "many many many many many words in text"
}
```


## POST /api/projects/source/master/<filepath>

Commits a file

**Request params:**

attributes[attrib1] = "val1",
attributes[attrib2] = "val2",
attributes[attrib3] = 123,
attributes[attrib4][] = "one"
attributes[attrib4][] = "two"
attributes[attrib5] = "true"
attributes[attrib6] = "false"
text = "many many many many many words in text"

**Response:**

same as `GET /api/projects/source/master/<filepath>/<myfile>`

## GET /api/projects/compare/master..new_branch

@todo: нужно продумать, как это лучше отдавать фронту, чтобы меньше пришлось кода писать.

## GET /api/projects/merge/from_branch/to_branch

Merges one branch into another or returns error, if conflict

**Response if success:**

```
{
    "merged": true
}
```

**Response if conflict:**

```
{
    "merged": false,
    "conflict": true
}
```

@todo: нужно понять, как поступать в случае конфликта. По идее - фронт должен делать compare и сам помогать решить этот конфликт. Но тогда по логике вещей нам нужен multiple commit, который будет позволять редактировать сразу пачку файлов. Сейчас такого метода нет.


## GET /api/projects/push

Pushes repo to remote repo

@todo: фактически это тот же мердж, и тут тоже могут быть конфликты. Как решим вопрос с интерфейсами мерджа - так будет понятно и тут.

## GET /api/projects/pull

Pulls repo from remote repo

@todo: фактически это тот же мердж, и тут тоже могут быть конфликты. Как решим вопрос с интерфейсами мерджа - так будет понятно и тут.



