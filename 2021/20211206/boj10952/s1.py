import sys
sys.stdin = open('chat.py')

while True:
    a, b = map(int, input().split())
    if not a and not b:
        break
    print(a + b)
