import sys
sys.stdin = open('chat.py')

n = int(input())

for i in range(9):
    n -= int(input())

print(n)
