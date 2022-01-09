import sys
sys.stdin = open('input.txt')
input = sys.stdin.readline
sys.setrecursionlimit(100000)


def get_leaves(vtx):
    global leaves
    if len(adj_list[vtx]) == 0:
        leaves += 1
    else:
        for adj_vtx in adj_list[vtx]:
            if not visited[adj_vtx]:
                visited[adj_vtx] = 1
                get_leaves(adj_vtx)


def remove_children(target_vtx):
    for r_idx, row in enumerate(adj_list):  # 해당 노드 찾아서 지워
        if target_vtx in row:
            adj_list[r_idx].remove(target_vtx)
            break

    for adj_vtx in adj_list[target_vtx]:  # 연결된 노드들도 재귀
            remove_children(adj_vtx)


N = int(input())
inp_data = list(map(int, input().split()))
target = int(input())
adj_list = [[] for _ in range(N)]
leaves = 0
visited = [0] * N
removed = [0] * N

for idx, ele in enumerate(inp_data):
    if ele != -1:
        adj_list[ele].append(idx)
print(adj_list)
remove_children(target)
print(adj_list)
get_leaves(0)
print(leaves)

# 루트에서 bfs 해서 끝나고 돌아올 때 leaf ++해주기
# 삭제 후 다시 leaf 세기
