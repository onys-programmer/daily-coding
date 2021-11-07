# 과제 3번 코드란

def solution(s1, s2, s3):
    cur_idxs = [[0, 0, 0]]
    
    while cur_idxs:
        # 현재 idx 상태 팝해서 구조분해 할당하기
        s1_idx, s2_idx, s3_idx = cur_idxs.pop(0)
        
        # s1 검사 다 하지 않았고, s3의 현재 글자가 s1의 현재 글자와 같을 때
        if s1_idx <= len(s1) - 1 and s3[s3_idx] == s1[s1_idx]:
            # s1_idx, s3_idx 업데이트 후 cur_idxs에 추가
            cur_idxs.append([s1_idx+1, s2_idx, s3_idx+1])
        
        # s2 검사 다 하지 않았고, s3의 현재 글자가 s2의 현재 글자와 같을 때
        if s2_idx <= len(s2) - 1 and s3[s3_idx] == s2[s2_idx]:
            # s2_idx와 s3_idx 업데이트 후 cur_idxs에 추가
            cur_idxs.append([s1_idx, s2_idx + 1, s3_idx + 1])

        # s3 다 검사했으면 True 리턴
        if s3_idx == len(s3) - 1:
            return True

        # 같지 않으면 cur_idxs에 요소가 없으니 while문 종료

    # while문 종료되면 default로 False 반환
    return False

print(solution("aabcc", "dbbca", "aadbbcbcac"))
print(solution("aabcc", "dbbca", "aadbbbaccc"))
