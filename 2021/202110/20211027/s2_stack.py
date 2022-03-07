import sys
sys.stdin = open('chat.py')
input = sys.stdin.readline


def dfs(start, arr):
    infected = 0
    stack = [start]
    arr[start] = 1
    while stack:
        vtx = stack.pop()
        for adj_vtx in adj_list[vtx]:
            if arr[adj_vtx] == 0:
                stack.append(adj_vtx)
                infected += 1
                arr[adj_vtx] = 1
    return infected


N = int(input())  # 컴퓨터 갯수
connected = int(input())  # 간선 갯수
adj_list = [[] for _ in range(N + 1)]
for _ in range(connected):
    from_vtx, to_vtx = map(int, input().split())
    adj_list[from_vtx].append(to_vtx)
    adj_list[to_vtx].append(from_vtx)

visited = [0] * (N + 1)

print(dfs(1, visited))

#         1             4 - 7
#    5 -  -  - 2
# 6 -          -3
