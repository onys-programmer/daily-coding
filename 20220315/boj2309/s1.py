import sys
sys.stdin = open('input.txt')

heights = []
for _ in range(9):
    height = input()
    heights.append(int(height))

sortedHeights = sorted(heights)
gap = sum(sortedHeights) - 100

flag = False
for i in range(9):
    if flag:
        break
    for j in range(i, 9):
        if flag:
            break
        if gap == sortedHeights[i] + sortedHeights[j]:
            a = sortedHeights[i]
            b = sortedHeights[j]
            for ele in sortedHeights:
                if ele == a:
                    sortedHeights.remove(a)
            for ele in sortedHeights:
                if ele == b:
                    sortedHeights.remove(b)
            flag = True

for ele in sortedHeights:
    print(ele)
