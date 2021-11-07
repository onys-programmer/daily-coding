import sys
sys.stdin = open('input.txt')
sys.setrecursionlimit(100000)


def normal_eyes(y, x, char):
    if field[y][x] == char:
        if not visited[y][x]:
            return True
    return False


def color_blind_eyes(y, x, char):
    if char == 'B':
        if field[y][x] == char:
            if not visited_color_blind[y][x]:
                return True
    else:
        if field[y][x] == 'R' or field[y][x] == 'G':
            if not visited_color_blind[y][x]:
                return True
        return False


def is_valid(y, x, char, is_blind):
    eyes = color_blind_eyes if is_blind else normal_eyes
    if 0 <= x <= N - 1 and 0 <= y <= N - 1:
        if eyes(y, x, char):
            return True
    return False


def dfs(r, c, char, is_blind):  # blind 정보를 받아 dfs 탐색
    dx = [0, 1, 0, -1]
    dy = [-1, 0, 1, 0]

    # 방문처리
    if is_blind:
        visited_color_blind[r][c] = 1
    else:
        visited[r][c] = 1

    for i in range(4):
        nr, nc = r + dy[i], c + dx[i]
        if is_valid(nr, nc, char, is_blind):  # 눈으로 봤을 때 같은색이고 방문 안했으면
            dfs(nr, nc, char, is_blind)  # dfs


N = int(input())
field = [list(input()) for _ in range(N)]
visited = [[0] * N for _ in range(N)]
visited_color_blind = [[0] * N for _ in range(N)]
area_cnt = 0
area_cnt_color_blind = 0

for r_idx, row in enumerate(field):
    for c_idx, col in enumerate(row):
        first_char = col
        if not visited[r_idx][c_idx]:
            dfs(r_idx, c_idx, first_char, False)
            area_cnt += 1
        if not visited_color_blind[r_idx][c_idx]:
            dfs(r_idx, c_idx, first_char, True)
            area_cnt_color_blind += 1

print(area_cnt, end=' ')
print(area_cnt_color_blind)
