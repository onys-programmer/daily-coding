import sys
sys.stdin = open('input.txt')

n = input()
length = len(n)

digit = 0
for i in range(length):
    digit += int(n[length - i - 1]) * 8 ** i

rst = ''
acc = digit

while acc > 0:
    rst += str(acc % 2)
    acc //= 2

print(rst[::-1])
