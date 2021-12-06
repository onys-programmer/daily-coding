N = input()
original_N = N

cycle = 0

while True:
    if len(N) < 2:
        N = '0' + N
    each_sum = str(int(N[0]) + int(N[1]))
    N = N[1] + each_sum[-1]
    cycle += 1
    if int(N) == int(original_N):
        break

print(cycle)
