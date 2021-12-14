import sys
sys.stdin = open('input.txt')

N = input()
r = 31
M = 1234567891

string = input()
result = 0

for idx, char in enumerate(string):
    result += (ord(char) - 96)*r**idx

print(result % M)
