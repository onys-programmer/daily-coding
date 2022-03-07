import sys
sys.stdin = open('chat.py')

yoot = ['E', 'A', 'B', 'C', 'D']

for _ in range(3):
    inp = input().split()
    print(yoot[inp.count('0')])
