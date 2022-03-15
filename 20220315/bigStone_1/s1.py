import sys
sys.stdin = open('input.txt')

N, M = map(int, input().split())
numbers = list(map(int, input().split()))
psum = [0]
cur_sum = 0
for num in numbers:
    cur_sum += num
    psum.append(cur_sum)

for tc in range(M):
    A, B = map(int, input().split())
    print(psum[B] - psum[A - 1])
