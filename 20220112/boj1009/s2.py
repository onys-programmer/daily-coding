import sys
sys.stdin = open('input.txt')

T = int(input())

for _ in range(T):
    a, b = map(int, input().split())
    temp = 1

    for _ in range(b):
        temp = (temp * a) % 10

    if temp == 0:
        print(temp + 10)
    else:
        print(temp)
