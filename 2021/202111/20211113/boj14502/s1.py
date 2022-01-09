import sys
sys.stdin = open('input.txt')


def spread(arr):
    dx = [0, 1, 0, -1]
    dy = [-1, 0, 1, 0]

    visited = [arr[i][:] for i in range(height)]

    def dfs(r, c):
        visited[r][c] = 2
        for i in range(4):
            nr, nc = r + dy[i], c + dx[i]
            if 0 <= nr < height and 0 <= nc < width:
                if arr[nr][nc] == 0 and not visited[nr][nc]:
                    dfs(nr, nc)

    for r_idx, row in enumerate(arr):
        for c_idx, col in enumerate(row):
            if col == 2:
                dfs(r_idx, c_idx)

    return visited


def get_safe_area(arr):
    cnt = 0
    for row in arr:
        for col in row:
            if col == 0:
                cnt += 1
    return cnt

# 벽을 세우고, 확산하고, 0 개수 세기
# 0 개수가 기존 최대값보다 많으면 갱신하기


height, width = map(int, input().split())
field = []
for _ in range(height):
    field.append(list(map(int, input().split())))

max_safe_area = 0

for r1 in range(height):
    for c1 in range(width):
        if field[r1][c1] != 0:
            continue
        for r2 in range(height):
            for c2 in range(width):
                if field[r2][c2] != 0:
                    continue
                if r1 == r2 and c1 == c2:
                    continue
                for r3 in range(height):
                    for c3 in range(width):
                        if field[r3][c3] != 0:
                            continue
                        if r2 == r3 and c2 == c3:
                            continue
                        if r3 == r1 and c3 == c1:
                            continue
                        field[r1][c1], field[r2][c2], field[r3][c3] = 1, 1, 1

                        infected_field = spread(field)
                        safe_areas = get_safe_area(infected_field)
                        max_safe_area = max(max_safe_area, safe_areas)
                        field[r1][c1], field[r2][c2], field[r3][c3] = 0, 0, 0

print(max_safe_area)
