import sys
sys.stdin = open('chat.py')

T = int(input())
for test_case in range(1, T + 1):
    a, b = map(int, input().split())
    answer = a + b
    print(f'Case #{test_case}: {a} + {b} = {answer}')
