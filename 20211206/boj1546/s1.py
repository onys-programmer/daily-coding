import sys
sys.stdin = open('input.txt')

N = int(input())
score_list = list(map(int, input().split()))
max_score = max(score_list)
new_score_list = list(map(lambda score: score / max_score * 100, score_list))
print(sum(new_score_list)/len(new_score_list))
