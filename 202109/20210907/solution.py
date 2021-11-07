import string

# 소수인지 확인하는 함수
def is_sosoo(num):
    yaksoos = []
    # 약수가 1과 자기 자신 둘 뿐이면 소수
    for i in range(1, num + 1):
        if num % i == 0:
            yaksoos.append(i)
    return True if yaksoos == [1, num] else False
        

tmp = string.digits
# k진수로 바꾸는 함수
def parser(n, k):
    q, r = divmod(n, k)
    if q == 0:
        return tmp[r]
    else:
        return parser(q, k) + tmp[r]
    

def solution(n, k):
    answer = -1
    str_n = parser(n, k)
    
    
    def recur(cnt, string):
        if len(string) == 0:
            return cnt
        
        temp_i = 0
        stack = ''
        
        for idx, char in enumerate(string):
            # 0이 나오거나 끝날 때까지 stack에 추가
            if char == '0':
                break
            stack += char
            temp_i += 1
            
        # 소수면 +1 해주기
        if is_sosoo(int(stack)):
            cnt += 1
            
        return recur(cnt, string[temp_i:])
    

    result = recur(0, str_n)        
    # 4개 경우 검사
    
    # 0이 나오면
    # 처음것만 P0, 다음에는 0P0 or 0P
    # 맨 처음이 0이 아닐 때, 0이 끝날 때까지 안나올 때
    # P, 중간에 0이 없을 것
    
    # 다음이 0이 아니고, 끝일 때
    # 0P
    
    
    
    return result

print(solution(437674, 3))