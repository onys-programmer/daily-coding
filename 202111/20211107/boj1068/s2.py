import sys
sys.stdin = open('input.txt')

N = int(input())
parents = list(map(int, input().split()))
del_node = int(input())
tree = {}

for i in range(N):
    if i == del_node or parents[i] == del_node:
        continue
    if parents[i] in tree:
        tree[parents[i]].append(i)
    else:
        tree[parents[i]] = [i]

result = 0
if -1 in tree:
    que = [-1]
else:
    que = []
while que:
    node = que.pop()
    if node not in tree:
        result += 1
    else:
        que += tree[node]

print(result)
