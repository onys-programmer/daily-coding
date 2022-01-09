def most_alpha(string):
    frequency = {}
    max = 
    # alpha별 frepuency dictionary 생성
    for alpha in string:
        if frequency.get(alpha) == None:
            frequency.update({alpha:1})
        else:
            frequency[alpha] += 1

    # frequency 순회하면서 최대값의 key값 추출
    for ele in frequency:
        

    return frequency

print(most_alpha('apple'))