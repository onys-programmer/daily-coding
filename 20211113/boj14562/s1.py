import sys
sys.stdin = open('input.txt')


def skill_a(point):
    return point * 2, 3


def skill_b(point):
    return point + 1


def dfs(me, you):
    global min_kicks
    a_cnt = 0
    b_cnt = 0
    while me < you:
        me = skill_a(me)
        a_cnt += 1
        me, you = skill_b(me)
        b_cnt += 1
    if me == you:
        min_kicks = min(min_kicks, a_cnt + b_cnt)
    else:
        pass


C = int(input())
for _ in range(C):
    S, T = map(int, input().split())
    gap = T - S
    min_kicks = 999999


    print(gap)
