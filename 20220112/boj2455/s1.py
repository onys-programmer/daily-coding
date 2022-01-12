import sys
sys.stdin = open('input.txt')

total = 0
max_total = 0

for _ in range(4):
    get_out, get_in = map(int, input().split())
    total -= get_out
    total += get_in
    max_total = max(total, max_total)

print(max_total)
