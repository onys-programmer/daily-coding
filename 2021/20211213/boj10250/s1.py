import sys
sys.stdin = open('chat.py')

T = int(input())

for test_case in range(T):
    H, W, N = map(int, input().split())
    zero = '0'

    if H == 1:
        floor_num = 1
        room_num = N
    else:
        floor_num = N % H if N % H != 0 else H
        room_num = (N - 1) // H + 1
    if room_num >= 10:
        zero = ''

    print(f'{floor_num}{zero}{room_num}')
