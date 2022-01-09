import sys
sys.stdin = open('input.txt')

while True:
    a, b, c = sorted(map(lambda x: int(x) ** 2, input().split()))
    if not a and not b and not c:
        break
    print('right') if a + b == c else print('wrong')
