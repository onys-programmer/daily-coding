from collections import deque
import sys
sys.stdin = open('chat.py')
input = sys.stdin.readline

# delta
dx = [0, 1, 1, 1, 0, -1, -1, -1]
dy = [-1, -1, 0, 1, 1, 1, 0, -1]


def bfs(y, x):
    def is_valid(a, b):
        if 0 <= a < height and 0 <= b < width:
            if not dist[a][b]:
                return True
        return False

    dist = [[0] * width for _ in range(height)]

    q = deque([(y, x)])
    dist[y][x] = 1

    while q:
        r, c = q.popleft()
        for i in range(8):
            nr, nc = r + dy[i], c + dx[i]
            if is_valid(nr, nc):
                if field[nr][nc] == 1:
                    return dist[r][c]
                else:
                    dist[nr][nc] = dist[r][c] + 1
                    q.append((nr, nc))


height, width = map(int, input().split())
field = []
results = []

for _ in range(height):
    field.append(list(map(int, input().split())))

for r_idx, row in enumerate(field):
    for c_idx, col in enumerate(row):
        if col == 0:
            results.append(bfs(r_idx, c_idx))

print(max(results))
