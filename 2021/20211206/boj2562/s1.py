import sys
sys.stdin = open('chat.py')

max_num = [0, 0]

for i in range(1, 10):
    num = int(input())
    if num > max_num[0]:
        max_num[0] = num
        max_num[1] = i

print(max_num[0])
print(max_num[1])
