result = [0] * 26

for char in input():
    result[ord(char.upper()) - 65] += 1
print(chr(result.index(max(result)) + 65)) if result.count(max(result)) == 1 else print('?')
