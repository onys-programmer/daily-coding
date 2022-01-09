import sys
sys.stdin = open('input.txt')

while True:
    a, b = map(int, input().split())
    if not a and not b:
        break
    print(a + b)
