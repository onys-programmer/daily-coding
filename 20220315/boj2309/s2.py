import sys
from itertools import permutations
sys.stdin = open('input.txt')

heights = [int(input()) for _ in range(9)]
for permutation in permutations(sorted(heights), 7):
    if sum(permutation) == 100:
        for ele in permutation:
            print(ele)
        break
