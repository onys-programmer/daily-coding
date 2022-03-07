import sys
sys.stdin = open('chat.py')

dots = []
for i in range(3):
    dots.append(list(map(int, input().split())))

i = 0
for j in range(2):
    if dots[i][j] == dots[i + 1][j]:
        dots[i][j] = -1
        dots[i + 1][j] = -1
    if dots[i][j] == dots[i + 2][j]:
        dots[i][j] = -1
        dots[i + 2][j] = -1
    if dots[i + 1][j] == dots[i + 2][j]:
        dots[i + 1][j] = -1
        dots[i + 2][j] = -1

a, b = 0, 0

for dot in dots:
    if dot[0] != -1:
        a = dot[0]
    if dot[1] != -1:
        b = dot[1]

print(a, b)
