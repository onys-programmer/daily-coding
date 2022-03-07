import sys
sys.stdin = open('chat.py')

arr = []
for _ in range(7):
    n = int(input())
    arr.append(n)
odds = list(filter(lambda x: x % 2 != 0, arr))
if len(odds) != 0:
    print(sum(odds))
    print(min(odds))
else:
    print(-1)
