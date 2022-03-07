import sys
sys.stdin = open('chat.py')

inp = input()

table = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

for ele in table:
    inp = inp.replace(ele, '*')

print(len(inp))
