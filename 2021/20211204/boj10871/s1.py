import sys
sys.stdin = open('input.txt')

N, X = map(int, input().split())
inp_list = list(map(int, input().split()))
print(*filter(lambda ele: ele < X, inp_list))
