import sys
sys.stdin = open('chat.py')

digit = int(input(), 8)
print(bin(digit)[2:])
