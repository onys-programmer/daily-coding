import sys
sys.stdin = open('chat.py')
sys.setrecursionlimit(100000)

# delta 상우하좌
dx = [0, 1, 0, -1]
dy = [-1, 0, 1, 0]


def can_go(y, x):
    if 0 <= x <= N - 1 and 0 <= y <= N - 1:  # 유효한 범위인지
        if field[y][x] == 1:  # 1이어야만 검사
            if not visited[y][x]:  # 방문하지 않았어야만 True 반환
                return True
    return False


def dfs(r, c, depth):
    visited[r][c] = depth  # 현재 정점 단지명으로 방문 처리
    for i in range(4):
        nr, nc = r + dy[i], c + dx[i]
        if can_go(nr, nc):
            dfs(nr, nc, depth)


def how_many_apts(visited_data, block_data):
    cnt = 0
    for row in visited_data:
        for col in row:
            if col == block_data:
                cnt += 1
    return cnt


N = int(input())
field = [list(map(int, input())) for _ in range(N)]
visited = [[0] * N for _ in range(N)]
apts_num = []
block_num = 1  # 1단지부터 시작

for i in range(N):
    for j in range(N):
        if field[i][j] == 1:
            if not visited[i][j]:
                dfs(i, j, block_num)  # visited를 단지명으로 업데이트
                apts_num.append(how_many_apts(visited, block_num))  # 현재 단지의 아파트 대수 append
                block_num += 1  # 다음 단지로

print(len(apts_num))
for ele in sorted(apts_num):
    print(ele)
