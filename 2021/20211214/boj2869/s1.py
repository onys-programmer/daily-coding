import sys, math
sys.stdin = open('chat.py')

up, down, total = map(int, input().split())

per_day = up - down
actual_dist = total - down
print(math.ceil(actual_dist / per_day))
