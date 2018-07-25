class Projects(object):
    def getList(self):
        return [
            {
                "title": "",
                "path": "",
                "remote": ""
            }
        ]

    def checkoutProject(self, remote):
        path = ""
        return self.getProject(self, path)

    def getProject(self, path):
        return {
            "path": "путь до проекта",
            "title": "НазваниеПроекта",
            "remote": ""
        }

    # def pushProject(self, path):
    #     return True
    #
    # def pullProject(self, path):
    #     return True
    #
    # def merge(self, path, branch1, branch2):
    #     return True