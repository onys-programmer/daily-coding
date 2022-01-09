from itertools import permutations
import re

def solution(expression):
    op = [x for x in ['*','+','-'] if x in expression]
    op = [list(y) for y in permutations(op)]
    ex = re.split(r'(\D)',expression)

    a = []
    for x in op:
        _ex = ex[:]
        for y in x:
            while y in _ex:
                tmp = _ex.index(y)
                _ex[tmp - 1] = str(eval(_ex[tmp - 1] + _ex[tmp] + _ex[tmp + 1]))
                _ex = _ex[:tmp] + _ex[tmp + 2:]
        a.append(_ex[-1])


    return max(abs(int(x)) for x in a)

print(solution("100-200*300-500+20"))
print(solution("50*6-3*2"))