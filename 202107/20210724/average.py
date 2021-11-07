num_of_lines = int(input())
lines = []
for _ in range(num_of_lines):
    lines.append(list(map(int, input().split())))

def average(arr):
    return round(sum(arr)/len(arr))

averages = list(map(average, lines))

for idx, avg in enumerate(averages):
    print('#{} {}'.format(idx+1, avg))
