import sys
sys.stdin = open('chat.py')
input = sys.stdin.readline
sys.setrecursionlimit(100000)


def dfs(vtx_num):
    for adj_vtx in graph[vtx_num]:
        if not visited[adj_vtx]:
            visited[adj_vtx] = 1
            dfs(adj_vtx)


# Make a graph
vtxs, edges = map(int, input().split())
graph = [[] for _ in range(vtxs + 1)]
for _ in range(edges):
    from_vtx, to_vtx = map(int, input().split())
    graph[from_vtx].append(to_vtx)
    graph[to_vtx].append(from_vtx)

# Count connected_components
connected_components = 0
visited = [0] * (vtxs + 1)
for i in range(1, vtxs + 1):
    if not visited[i]:
        dfs(i)
        connected_components += 1

print(connected_components)
