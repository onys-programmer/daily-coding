def solution(N, trust):
    frequency = {}
    maybe_judge = []

    # 각각 믿어진 수가 몇인지 dictionary로 제작합니다.
    for person in trust:
        number = person[1]
        if frequency.get(str(number)) == None:
            frequency.update({str(number): 1})
        else:
            frequency[str(number)] += 1

    # 자신을 제외한 모두에게 믿어진 사람을 판사 후보군에 추가합니다.
    for person in frequency.items():
        if person[1] == N - 1:
            maybe_judge.append(person[0])
    
    # 만약 판사 후보군이 1명이고,
    if len(maybe_judge) == 1:
        # 그 사람이 믿는 사람이 있다면 -1을
        for person in trust:
            if person[0] == int(maybe_judge[0]):
                return -1
        # 없다면 그 사람의 번호를 리턴합니다.
        else: 
            return int(maybe_judge[0])

    return -1

print(solution(2,[[1,2]]))
print(solution(3,[[1,3],[2,3]]))
print(solution(3,[[1,3],[2,3],[3,1]]))
print(solution(3,[[1,2],[2,3]]))
print(solution(4,[[1,3],[1,4],[2,3],[2,4],[4,3]]))