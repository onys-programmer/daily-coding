import sys
sys.stdin = open('chat.py')

girls, boys, intern = map(int, input().split())

teams = 0
while girls and boys:
    if girls + boys - 3 < intern:
        break
    if girls < 2 or boys < 1:
        break

    girls -= 2
    boys -= 1
    teams += 1

print(teams)
