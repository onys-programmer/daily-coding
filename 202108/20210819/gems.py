def solution(gems):
    answer = []
    dic = {}
    what_gem = list(set(gems))

    for i in range(0, len(gems)):
        dic[gems[i]] = i + 1

        if len(dic) == len(what_gem):
            ans = list(dic.items())
            ans.sort(key = lambda x: x[1])

            if len(answer) == 0:
                answer = [ans[0][1], i + 1]
            else:
                if answer[-1] - answer[0] > i + 1 - ans[0][1]:
                    answer = [ans[0][1], i + 1]

            del dic[ans[0][0]]

    return answer

gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]
print(solution(gems))
 
gems = ["AA", "AB", "AC", "AA", "AC"]
print(solution(gems))
 
gems = ["XYZ", "XYZ", "XYZ"]
print(solution(gems))
 
gems = ["ZZZ", "YYY", "NNNN", "YYY", "BBB"]
print(solution(gems))
