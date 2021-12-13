import sys
sys.setrecursionlimit(100000)


def recur(num, depth):
    if num >= N:
        return depth

    return recur(num + (depth * 6), depth + 1)


N = int(input())
print(recur(1, 1))
