intervals_1 = [[1,3],[2,6],[8,10],[15,18]]
intervals_2 = [[1,4],[4,5]]

def solution(intervals):
    result = []
    
    # 인터벌 시작점을 기준으로 오름차순 정렬
    intervals = sorted(intervals, key = lambda x : x[0])
 
    for interval in intervals: 
        # 최초 인터벌은 그냥 추가
        if len(result) == 0:
            result.append(interval)
        
        # 현재 인터벌 시작점이 result 맨 끝 인터벌의 끝점보다 작거나 같다면 대체
        if interval[0] <= result[-1][1]:
            result[-1][1] = interval[1]

        # 아니라면 그냥 추가
        else:
            result.append(interval)

    return result

print(solution(intervals_1))
print(solution(intervals_2))
