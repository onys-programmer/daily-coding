def solution(N, K, L, apples, moves):
    apples = list(map(list, apples))

    go = [[0,1],[1,0],[0,-1],[-1,0]]
    snake = [[0, 0]]

    time = 1
    way = 0
    while True:
        head = snake[-1][:]
        x, y = head[0] + go[way][0], head[1] + go[way][1]
        if [x, y] in snake or x >= N or y >= N or x < 0 or y < 0:
            break
        if apples[x][y] == 0:
            snake = snake[1:]
        else:
            apples[x][y] = 0
        snake.append([x,y])
        if moves[time] == 'D':
            way = (way + 1) % 4
        elif moves[time] == 'L':
            way = (way - 1)  %4
        time += 1
    return time

N = 6
K = 3
L = 3
apples = [(3, 4), (2, 5), (5, 3)]
moves = [(3, 'D'), (15, 'L'), (17, 'D')]
print(solution(N, K, L, apples, moves))
 
N = 10
K = 4
L = 4
apples = [(1, 2), (1, 3), (1, 4), (1, 5)]
moves = [(8, 'D'), (10, 'D'), (11, 'D'), (13, 'L')]
print(solution(N, K, L, apples, moves))
 
N = 10
K = 5
L = 4
apples = [(1, 5), (1, 3), (1, 2), (1, 6), (1, 7)]
moves = [(8, 'D'), (10, 'D'), (11, 'D'), (13, 'L')]
print(solution(N, K, L, apples, moves))
