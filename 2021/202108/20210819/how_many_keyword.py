class Node(object):
    def __init__(self, key):
        self.key = key
        self.memo = {}
        self.children = {}

class Trie(object):
    def __init__(self):
        self.head = Node(None)

    def insert(self, string):
        curr_node = self.head

        if len(string) in curr_node.memo:
            curr_node.memo[len(string)] += 1
        else :
            curr_node.memo[len(string)] = 1            
        for char in string:
            if char not in curr_node.children:
                curr_node.children[char] = Node(char)
            curr_node = curr_node.children[char]
            if len(string) in curr_node.memo:
                    curr_node.memo[len(string)] += 1
            else :
                    curr_node.memo[len(string)] = 1

    def count_starts_with(self, prefix, length):
        curr_node = self.head
        result = []

        if length not in curr_node.memo:
            return 0

        for char in prefix:
            if char in curr_node.children:
                curr_node = curr_node.children[char]
            else:
                return 0

        if length in curr_node.memo:
            return curr_node.memo[length]
        else:
            return 0

def solution(words, queries):
    answer = []
    pre = Trie()
    suf = Trie()
    memo = {}

    for word in words:
        pre.insert(word)
        suf.insert(word[::-1])

    for query in queries:
        ret = 0
        length = len(query)
        temp = query.replace("?", "")

        if query[0] != '?':
            ret = pre.count_starts_with(temp, length)
        else:
            ret = suf.count_starts_with(temp[::-1], length)
        answer.append(ret)
    return answer
    
words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
queries = ["fro??", "????o", "fr???", "fro???", "pro?"]
print(solution(words, queries))
