import sys
sys.stdin = open('input.txt')

N = int(input())
for j in range(1, 10):
    print(f'{N} * {j} = {N * j}')