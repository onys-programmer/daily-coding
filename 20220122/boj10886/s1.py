import sys
sys.stdin = open('chat.py')

n = int(input())

cnt = 0
for i in range(n):
    cnt += int(input())

if cnt / n > 1/2:
    print('Junhee is cute!')
else:
    print('Junhee is not cute!')

    print('hello')
