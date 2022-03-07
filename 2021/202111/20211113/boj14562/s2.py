import sys
sys.stdin = open('chat.py')
from collections import deque


def bfs(me, you):
    q = deque()
    q.append((me, you, 0))
    while q:
        n_me, n_you, cnt = q.popleft()
        if n_me <= n_you:
            q.append((n_me * 2, n_you + 3, cnt + 1))
            q.append((n_me + 1, n_you, cnt + 1))
            if n_me == n_you:
                return cnt


C = int(input())
for _ in range(C):
    S, T = map(int, input().split())
    print(bfs(S, T))
