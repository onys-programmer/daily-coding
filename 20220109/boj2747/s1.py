table = [0, 1]


def fibo(n):
    for i in range(2, n + 1):
        table.append(table[i - 2] + table[i - 1])
    return table[n]


print(fibo(int(input())))
