import sys
sys.stdin = open('chat.py')
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    A, B = map(int, input().split())
    print(A + B)
