import sys
sys.stdin = open('chat.py')


def is_valid(x, y):
    if 0 <= x < height and 0 <= y < width:
        if field[x][y] == 1:
            if not visited[x][y]:
                return True
    return False


def bfs(a, b):
    cnt = 0
    dx = [0, 1, 0, -1]
    dy = [-1, 0, 1, 0]

    q = [(a, b)]
    visited[a][b] = 1
    while q:
        r, c = q.pop(0)

        if r == height and c == width:
            break
        for i in range(4):
            nr, nc = r + dy[i], c + dx[i]
            if is_valid(nr, nc):
                visited[nr][nc] = visited[r][c] + 1
                q.append((nr, nc))

    return visited[height - 1][width - 1]


height, width = map(int, input().split())
field = []
visited = [[0] * width for _ in range(height)]

for _ in range(height):
    field.append(list(map(int, list(input()))))

print(bfs(0, 0))
