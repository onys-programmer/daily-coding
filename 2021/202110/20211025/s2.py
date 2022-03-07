import sys

sys.stdin = open('chat.py')

# delta 우, 하
dx = [1, 0]
dy = [0, 1]

N = int(input())
field = [list(map(int, input().split())) for _ in range(N)]


def bfs():
    stack = [(0, 0)]

    while stack:
        row, col = stack.pop(0)

        if row == N - 1 and col == N - 1:  # 도착한 경우
            return 'HaruHaru'

        power = field[row][col]
        if power == 0:
            continue
        for i in range(2):  # 우, 하 순으로 탐색
            n_row, n_col = row + dy[i] * power, col + dx[i] * power

            # 범위에 안들어가면 fail, 들어가면 stack에 추가
            if 0 <= n_row < N and 0 <= n_col < N:
                stack.append((n_row, n_col))

    return 'Hing'


print(bfs())
