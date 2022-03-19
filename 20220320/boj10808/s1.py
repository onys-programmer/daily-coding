import sys
sys.stdin = open('input.txt')

S = input()
alphabets = [0 for _ in range(26)]

for char in S:
    alphabets[ord(char) - 97] += 1

print(*alphabets)
