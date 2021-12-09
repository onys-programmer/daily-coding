sum_num = 0
for num in map(int, input().split()):
    sum_num += num ** 2

print(sum_num % 10)
