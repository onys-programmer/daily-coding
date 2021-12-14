from functools import reduce


def factorial(n):
    if n == 0:
        return 1
    return reduce(lambda x, y: x * y, range(1, n + 1))


N, K = map(int, input().split())
answer = int(factorial(N) / (factorial(K) * factorial(N - K)))
print(answer)
