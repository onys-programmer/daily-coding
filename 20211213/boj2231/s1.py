def decompose(num):
    return num + sum(map(int, list(str(num))))


N = int(input())
min_constructor = N
for i in range(N, 1, -1):
    if decompose(i) == N:
        min_constructor = i

print(min_constructor) if min_constructor != N else print(0)
