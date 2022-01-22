import sys
sys.stdin = open('input.txt')

digit = int(input(), 8)
print(bin(digit)[2:])
