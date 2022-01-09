import sys
sys.stdin = open('input.txt')

T = int(input())
for test_case in range(T):
    k = int(input())
    n = int(input())

    apart = []
    zero_floor = [i + 1 for i in range(n)]
    apart.append(zero_floor)

    for i in range(1, k + 1):
        ith_floor = [sum(apart[i - 1][:j + 1]) for j in range(n)]
        apart.append(ith_floor)

    print(apart[k][n - 1])
