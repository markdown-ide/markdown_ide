import md


class GitMarkdown(Git):
    def getFile(self, branch, path):
        return Md()

    def commitFile(self, branch, path, md):
        '''
        :param branch: string
        :param path: string
        :param md: Md() object
        :return:
        '''
        return ""

    def getBranchDiff(self, branch1, branch2):
        '''
        :param branch1:
        :param branch2:
        '''
        берём parent.getBranchDiff(branch1, branch2) и обрабатываем

        return {
            "file/path.md": [
                Md(), Md()
            ]
        }