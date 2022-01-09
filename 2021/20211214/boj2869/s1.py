import sys, math
sys.stdin = open('input.txt')

up, down, total = map(int, input().split())

per_day = up - down
actual_dist = total - down
print(math.ceil(actual_dist / per_day))
