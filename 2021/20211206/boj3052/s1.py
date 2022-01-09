import sys
sys.stdin = open('input.txt')

rmdr_set = set()

for _ in range(10):
    num = int(input())
    rmdr_set.add(num % 42)

print(len(rmdr_set))
