import sys
sys.stdin = open('chat.py')

T = int(input())

for test_case in range(T):
    score = 0
    acc_cnt = 1
    results = input()
    for result in results:
        if result == 'O':
            score += acc_cnt
            acc_cnt += 1
        else:
            acc_cnt = 1

    print(score)
