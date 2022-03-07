import sys
sys.stdin = open('chat.py')

a = int(input())
b = int(input())
c = int(input())

result = str(a * b * c)

table = [0] * 10
for char in result:
    table[int(char)] += 1

for cnt in table:
    print(cnt)
