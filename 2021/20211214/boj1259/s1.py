import sys
sys.stdin = open('chat.py')

while True:
    inp = input()
    if inp == '0':
        break
    print('yes') if inp == inp[::-1] else print('no')
