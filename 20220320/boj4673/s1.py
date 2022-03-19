import sys
sys.setrecursionlimit(100000)

ans = [0 for _ in range(10001)]


def recur(num):
    res = num + sum(map(int, list(str(num))))
    if res < 10001:
        if ans[res]:
            return
    if res > 10000:
        return
    ans[res] = 1
    return recur(res)


for i in range(1, 10001):
    recur(i)

for i in range(1, 10001):
    if not ans[i]:
        print(i)
