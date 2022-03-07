import sys
sys.stdin = open('chat.py')

for line in sys.stdin:
    print(sum(map(int, line.split())))
