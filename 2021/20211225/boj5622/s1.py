def alpha_to_num(alpha):
    exception = ['S', 'V', 'Y', 'Z']
    res = (ord(alpha) - 65) // 3 + 3
    if alpha in exception:
        res -= 1
    return res


print(sum(map(alpha_to_num, input())))
