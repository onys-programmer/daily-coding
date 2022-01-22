import sys
sys.stdin = open('input.txt')

n = int(input())

for i in range(9):
    n -= int(input())

print(n)
