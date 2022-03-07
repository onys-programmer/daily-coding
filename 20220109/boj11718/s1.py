import sys
sys.stdin = open('chat.py')

while True:
    try:
        str = input()
        print(str)
    except EOFError:
        break
