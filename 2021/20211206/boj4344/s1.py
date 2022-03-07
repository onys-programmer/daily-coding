import sys
sys.stdin = open('chat.py')

T = int(input())

for test_case in range(T):
    score_list = list(map(int, input().split()))
    avg = sum(score_list[1:]) / score_list[0]
    higher_than_avg = list(filter(lambda score: score > avg, score_list[1:]))

    higher_than_avg_rate = round(len(higher_than_avg) / score_list[0] * 100, 3)
    dot_idx = str(higher_than_avg_rate).index('.')
    required_zeros = '0' * (dot_idx + 4 - len(str(higher_than_avg_rate)))
    print(f'{higher_than_avg_rate}{required_zeros}%')
