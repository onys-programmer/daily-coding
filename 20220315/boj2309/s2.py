import sys
from itertools import permutations
sys.stdin = open('input.txt')

heights = []
for _ in range(9):
    height = input()
    heights.append(int(height))

sortedHeights = sorted(heights)
for permutation in permutations(sortedHeights, 7):
    if sum(permutation) == 100:
        for ele in permutation:
            print(ele)
        break
