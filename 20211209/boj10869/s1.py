a, b = map(int, input().split())
result = [a + b, a - b, a * b, a // b, a % b]
for ele in result:
    print(ele)
