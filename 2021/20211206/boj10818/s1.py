import sys
sys.stdin = open('input.txt')

input()
inp_list = list(map(int, input().split()))

print(min(inp_list), max(inp_list))
