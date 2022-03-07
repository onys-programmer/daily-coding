import sys
sys.stdin = open('chat.py')

while True:
    try:
        a, b = map(int, input().split())
        print(a + b)
    except EOFError:
        break
