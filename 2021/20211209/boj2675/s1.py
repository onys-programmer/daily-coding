import sys
sys.stdin = open('chat.py')

T = int(input())
for tc in range(T):
    power, string = input().split()
    result = ''.join(map(lambda x: x * int(power), string))
    print(result)
