import sys
sys.stdin = open('chat.py')

N = int(sys.stdin.readline())
connected = int(sys.stdin.readline())  # 간선 갯수

# 1번 컴퓨터가 걸림 -> 웜 바이러스에 걸리게 되는 컴퓨터의 수

# 인접 리스트로 받아오기
adj_list = [[] for _ in range(N + 1)]
for _ in range(connected):
    from_vtx, to_vtx = map(int, sys.stdin.readline().split())
    adj_list[from_vtx].append(to_vtx)
    adj_list[to_vtx].append(from_vtx)


def dfs(start):
    global infected
    infected += 1
    for adj_vtx in adj_list[start]:
        if not visited[adj_vtx]:
            visited[adj_vtx] = 1
            dfs(adj_vtx)
            visited[adj_vtx] = 0


infected = 1
visited = [0] * (N + 1)
visited[1] = 1
dfs(1)

print(infected // 2 - 1)

#         1             4 - 7
#    5 -  -  - 2
# 6 -          -3
