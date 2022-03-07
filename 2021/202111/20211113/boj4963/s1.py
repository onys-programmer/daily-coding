import sys
from collections import deque
sys.stdin = open('chat.py')
input = sys.stdin.readline


def dfs(vtx):
    # delta 상,상우,우,우하,하,하좌,좌,좌상
    dx = [0, 1, 1, 1, 0, -1, -1, -1]
    dy = [-1, -1, 0, 1, 1, 1, 0, -1]
    q = deque()
    q.append(vtx)

    def is_valid(a, b):
        if 0 <= a <= h - 1 and 0 <= b <= w - 1:
            if field[a][b] == 1:
                if not visited[a][b]:
                    return True
        return False

    while q:
        r, c = q.pop()
        visited[r][c] = 1

        for i in range(8):
            nr, nc = r + dx[i], c + dy[i]
            if is_valid(nr, nc):
                q.append((nr, nc))


while True:
    w, h = map(int, input().split())
    if not w and not h:
        break

    field = []
    visited = [[0] * w for _ in range(h)]
    for _ in range(h):
        field.append(list(map(int, input().split())))

    islands_cnt = 0
    for r_idx, row in enumerate(field):
        for c_idx, col in enumerate(row):
            if col:
                if not visited[r_idx][c_idx]:
                    dfs((r_idx, c_idx))
                    islands_cnt += 1
    print(islands_cnt)
