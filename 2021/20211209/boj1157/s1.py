result = [0 for _ in range(26)]

for char in input().upper():
    result[ord(char) - 65] += 1
print(chr(result.index(max(result)) + 65)) if result.count(max(result)) == 1 else print('?')
