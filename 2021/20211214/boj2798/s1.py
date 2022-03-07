import sys
sys.stdin = open('chat.py')

N, M = map(int, input().split())
cards = list((map(int, input().split())))

results = []
cards_sum = 0
for i in range(N):
    cards_sum = 0
    cards_sum += cards[i]

    for j in range(i + 1, N):
        if j == i:
            continue
        cards_sum += cards[j]

        for k in range(j + 1, N):
            if k == j:
                continue
            if k == i:
                continue
            cards_sum += cards[k]
            results.append(M - cards_sum)
            cards_sum -= cards[k]

        cards_sum -= cards[j]

print(M - list(filter(lambda x: x >= 0, sorted(results)))[0])
