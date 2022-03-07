import sys
sys.stdin = open('chat.py')

T = int(input())
for _ in range(T):
    a, b = map(int, input().split())
    print(a + b)
