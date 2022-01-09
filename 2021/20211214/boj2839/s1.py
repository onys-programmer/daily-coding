min_bags = 5000

N = int(input())
power = N // 3

for i in range(power + 1):
    if (N - (3 * i)) % 5 == 0:
        min_bags = min(min_bags, ((N - (3 * i)) // 5) + i)

print(min_bags) if min_bags != 5000 else print('-1')
