result = [-1] * 26
for idx, char in enumerate(input()):
    if result[ord(char) - 97] == -1:
        result[ord(char) - 97] = idx

print(*result)
