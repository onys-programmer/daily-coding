S = input().upper()
result = []
for i in range(65, 91):
    result.append(S.count(chr(i)))
print('?' if result.count(max(result)) > 1 else chr(result.index(max(result)) + 65))
