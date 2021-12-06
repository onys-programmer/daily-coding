from collections import deque
import sys
sys.stdin = open('input.txt')
input = sys.stdin.readline


# delta
dx = [0, 1, 1, 1, 0, -1, -1, -1]
dy = [-1, -1, 0, 1, 1, 1, 0, -1]


def is_valid(a, b):
    if 0 <= a < height and 0 <= b < width:
        if not visited[a][b]:
            return True
    return False


def bfs(a, b):
    global max_safety_dist

    q = deque([(a, b, 0)])
    visited[a][b] = 1

    while q:
        r, c, dist = q.popleft()
        for i in range(8):
            nr, nc = r + dy[i], c + dx[i]
            if is_valid(nr, nc):
                if field[nr][nc] == 1:
                    max_safety_dist = max(max_safety_dist, dist + 1)
                    return
                else:
                    visited[r][c] = 1
                    q.append((nr, nc, dist + 1))


height, width = map(int, input().split())
field = []
visited = [[0] * width for _ in range(height)]

for _ in range(height):
    field.append(list(map(int, input().split())))

max_safety_dist = 0

for r_idx, row in enumerate(field):
    for c_idx, col in enumerate(row):
        if col == 0:
            bfs(r_idx, c_idx)
            visited = [[0] * width for _ in range(height)]

print(max_safety_dist)
