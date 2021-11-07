import sys
sys.stdin = open('input.txt')
sys.setrecursionlimit(100000)
input = sys.stdin.readline

# delta 상우하좌
dx = [0, 1, 0, -1]
dy = [-1, 0, 1, 0]


def is_valid(y, x):
    if 0 <= y <= height - 1 and 0 <= x <= width - 1:
        if not visited[y][x]:
            if field[y][x] == 1:
                return True
    return False


def dfs(r, c):
    for i in range(4):
        nr, nc = r + dy[i], c + dx[i]
        if is_valid(nr, nc):
            visited[nr][nc] = 1
            dfs(nr, nc)


T = int(input())
for test_case in range(1, T + 1):
    width, height, cabbages = map(int, input().split())
    field = [[0] * width for _ in range(height)]
    visited = [[0] * width for _ in range(height)]

    for _ in range(cabbages):
        col, row = map(int, input().split())
        field[row][col] = 1

    cnt = 0
    for r_idx, row in enumerate(field):
        for c_idx, col in enumerate(row):
            if col == 1 and not visited[r_idx][c_idx]:
                dfs(r_idx, c_idx)
                cnt += 1

    print(cnt)

    # field 0,0 부터 1이고 not visited면 dfs
    # 4방향 델타 탐색 후 탐색 끝나면 count + 1
