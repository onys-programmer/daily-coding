import sys
sys.stdin = open('input.txt')
sys.setrecursionlimit(100000)
input = sys.stdin.readline

N = int(input())
adj_list = [[] for _ in range(N + 1)]
result = [[] for _ in range(N + 1)]

for _ in range(N - 1):
    start, end = map(int, input().split())
    adj_list[start].append(end)
    adj_list[end].append(start)

visited = [0] * (N + 1)


def recur(vtx):
    visited[vtx] = 1
    for adj_vtx in adj_list[vtx]:
        if not visited[adj_vtx]:
            result[adj_vtx] = vtx
            recur(adj_vtx)


recur(1)

for ele in result[2:]:
    print(ele)
