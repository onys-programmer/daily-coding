import sys
sys.stdin = open('chat.py')
sys.setrecursionlimit(100000)
input = sys.stdin.readline


def rain(amount):
    arr = [[0] * N for _ in range(N)]
    for r_idx, row in enumerate(field):
        for c_idx, height in enumerate(row):
            if height <= amount:
                arr[r_idx][c_idx] = 1  # 잠김 처리 == visit 처리
    return arr


def dfs(r, c):
    # delta 상우하좌
    dx = [0, 1, 0, -1]
    dy = [-1, 0, 1, 0]

    def is_valid(r_i, c_i):
        if 0 <= r_i <= N - 1 and 0 <= c_i <= N - 1:
            if not visited[r_i][c_i]:
                return True
        return False

    for i in range(4):
        nr, nc = r + dy[i], c + dx[i]
        if is_valid(nr, nc):
            visited[nr][nc] = 1
            dfs(nr, nc)


N = int(input())
field = [list(map(int, input().split())) for _ in range(N)]

max_safety_land = 0
# 비가 얼마나 오느냐에 따라서 안전한 영역의 최대 개수
for i in range(100):
    safety_land = 0
    visited = rain(i)
    for r_idx, row in enumerate(visited):
        for c_idx, col in enumerate(row):
            if col == 0:
                safety_land += 1
                dfs(r_idx, c_idx)
    max_safety_land = max(safety_land, max_safety_land)

print(max_safety_land)
