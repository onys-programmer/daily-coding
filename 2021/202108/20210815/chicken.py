def solution(N, fry, clean, C):
    time = 0

    while True:
        time += 1
        chicken = 0

        for i in range(N):
            total = fry[i] + clean[i]
            chicken += time // total
        
        if chicken == C:
            break
    
    return time

print(solution(2, [3,6], [2,1], 20))
print('hi')