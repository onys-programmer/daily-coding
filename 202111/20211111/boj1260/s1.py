import sys
sys.stdin = open('input.txt')


def dfs(vtx):
    visited_d[vtx] = 1
    result_d.append(vtx)
    for adj_vtx in adj_list[vtx]:
        if not visited_d[adj_vtx]:
            dfs(adj_vtx)


def bfs(vtx):
    q = [vtx]
    while q:
        node = q.pop(0)
        if not visited_b[node]:
            visited_b[node] = 1
            result_b.append(node)
            q.extend(adj_list[node])


vtxes_num, edges_num, start_vtx = map(int, input().split())
adj_list = [[] for _ in range(vtxes_num + 1)]
visited_d = [0] * (vtxes_num + 1)
visited_b = [0] * (vtxes_num + 1)
result_d = []
result_b = []

for _ in range(edges_num):
    a, b = map(int, input().split())
    adj_list[a].append(b)
    adj_list[b].append(a)
adj_list = list(map(sorted, adj_list))

dfs(start_vtx)
bfs(start_vtx)

print(*result_d)
print(*result_b)

