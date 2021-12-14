import sys
sys.stdin = open('input.txt')

while True:
    inp = input()
    if inp == '0':
        break
    print('yes') if inp == inp[::-1] else print('no')
