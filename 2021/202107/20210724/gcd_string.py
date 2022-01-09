def gcdString(A, B):
    longer = A if len(A) >= len(B) else B
    shorter = A if len(A) <= len(B) else B

    def get_gcd(shorter):
        if shorter == '':
            return ''

        for i in range(len(longer)):
            if shorter*(i+1) == longer:
                return shorter

        return get_gcd(shorter[:-1])

    return get_gcd(shorter)

print(gcdString('ababcde', 'ababcde'))
print(gcdString('ab', 'abab'))

def gcdString_2(A, B):
    longer = A if len(A) >= len(B) else B
    shorter = A if len(A) <= len(B) else B
    
    check = ''
    result = ''
    
    for i in range(len(shorter)):
        check += A[i]
        
        if check * (len(longer)//len(check)) == B:
            result = check
    
    return result

print(gcdString_2('ab', 'abab'))

