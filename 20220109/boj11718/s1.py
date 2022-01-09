import sys
sys.stdin = open('input.txt')

while True:
    try:
        str = input()
        print(str)
    except EOFError:
        break
