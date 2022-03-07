import sys
sys.stdin = open('chat.py')

N, M = map(int, input().split())
field = []

for _ in range(N):
    field.append(list(input()))

min_paint = 64

# field를 8 * 8로 자르기

# 자른 것을 다시 칠하는데 흰으로 칠하는 경우 검으로 칠하는 경우 중 최소값을 저장


def get_painting_cnts(color_1, color_2):
    a = 0
    b = 0
    cnt = 0
    while a + 8 < N and b + 8 < M:
        for i in range(a, a + 8):
            for j in range(b, b + 8):
                if i % 2:  # 홀수일 때
                    if j % 2:  # 홀수일 때
                        if field[i][j] != color_1:
                            field[i][j] = color_1
                            cnt += 1
                    else:  # 짝수일 때
                        if field[i][j] != color_2:
                            field[i][j] = color_2
                            cnt += 1
                else:  # 짝수일 때
                    if j % 2:  # 홀수일 때
                        if field[i][j] != color_2:
                            field[i][j] = color_2
                            cnt += 1
                    else:  # 짝수일 때
                        if field[i][j] != color_1:
                            field[i][j] = color_1
                            cnt += 1
            b += 1
        a += 1
        min_paint = min(min_paint, min(get_painting_cnts('W', 'B'), get_painting_cnts('B', 'W')))

    return cnt


min_paint = min(min_paint, min(get_painting_cnts('W', 'B'), get_painting_cnts('B', 'W')))


# 돌면서 최소값보다 커지면 break
print(field)
