import sys
sys.stdin = open('chat.py')


def dfs(r, c):
    def is_valid(a, b, wood):
        if 0 <= a < height and 0 <= b < width:
            if field[a][b] == wood and not visited[a][b]:
                return True
        return False

    wood = field[r][c]
    visited[r][c] = 1

    if wood == '-':  # 가로로 탐색
        nr, nc = r, c + 1
        if is_valid(nr, nc, wood):
            dfs(nr, nc)
    else:  # 세로로 탐색
        nr, nc = r + 1, c
        if is_valid(nr, nc, wood):
            dfs(nr, nc)


height, width = map(int, input().split())
field = []
visited = [[0] * width for _ in range(height)]
cnt = 0

for _ in range(height):
    field.append(list(input()))

for r_idx, row in enumerate(field):
    for c_idx, col in enumerate(row):
        if not visited[r_idx][c_idx]:
            dfs(r_idx, c_idx)
            cnt += 1

print(cnt)
