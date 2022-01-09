import sys
sys.stdin = open('input.txt')

# delta 우, 하
dx = [1, 0]
dy = [0, 1]

N = int(input())
field = [list(map(int, input().split())) for _ in range(N)]


def dfs(row, col):
    global goal
    if row == N - 1 and col == N - 1:  # 도착한 경우
        goal = True
        print('HaruHaru')
        return

    # 범위를 벗어나지 않는데 도착할 수 없는 경우
    if field[row][col] == 0:
        return

    power = field[row][col]
    for i in range(2):  # 우, 하 순으로 탐색
        n_row, n_col = row + dy[i] * power, col + dx[i] * power

        # 범위에 안들어가면 fail, 들어가면 dfs 호출
        if 0 <= n_row < N and 0 <= n_col < N:
            dfs(n_row, n_col)


goal = False
dfs(0, 0)
if not goal:
    print('Hing')
