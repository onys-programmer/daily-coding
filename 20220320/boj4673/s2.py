import sys
sys.setrecursionlimit(100000)

ans = [0 for _ in range(10001)]


def calc(num):
    return num + sum(map(int, list(str(num))))


for i in range(1, 10001):
    if ans[i]:
        continue
    cnt = i
    while True:
        res = calc(cnt)
        if res > 10000:
            break
        else:
            ans[res] = 1
            cnt = res

for i in range(1, 10001):
    if not ans[i]:
        print(i)
