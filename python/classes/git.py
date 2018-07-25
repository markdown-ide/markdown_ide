class Git(object):
    def __init__(self):
        print ""

    def listInFolder(self, branch, path, recursive):
        return []

    def getFile(self, branch, path):
        return ""

    def commitFile(self, branch, path, text):
        return True

    def commitBinary(self, branch, path, хз не помню как бинарники в питоне загружать):
        return True

    def getBranchDiff(self, branch1, branch2):
        '''
        Выясняет, какие файлы отличаются и как.
        Для всех отличающихся файлов достаёт их полный текст.

        :param branch1:
        :param branch2:
        :return:
        '''
        return {
            "file/path.md": [
                "",""
            ]
        }

    def merge(self, branch1, branch2):
        return True