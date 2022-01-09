import sys
sys.stdin = open('input.txt')

for line in sys.stdin:
    print(sum(map(int, line.split())))
