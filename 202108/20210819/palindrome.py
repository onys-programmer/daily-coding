def is_pal(word):
    return True if word == word[::-1] else False


def solution(word):
    if is_pal(word):
        return ''
    
    if not is_pal(word):
        half = word[:len(word) // 2]
        return half + half[::-1]

s = 'abcdcba'
print(solution(s))
 
s = 'bannana'
print(solution(s))
 
s = 'wabe'
print(solution(s))
