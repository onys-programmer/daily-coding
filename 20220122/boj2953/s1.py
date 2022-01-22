import sys
sys.stdin = open('input.txt')

arr = []
for i in range(5):
    arr.append(list(map(int, input().split())))

n_arr = list(map(lambda x: sum(x), arr))
max_val = max(n_arr)
print(n_arr.index(max_val) + 1, max_val)
