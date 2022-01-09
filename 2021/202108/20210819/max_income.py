def solution(N, duration, cost):
    dp = [0]*(N+1)
 
    def dynamic_programming():
        max_val = 0
        for i in range(N-1, -1, -1):
            # 날짜 안 지날 경우
            if i + duration[i] <= N:
                cur_income_may = cost[i] + dp[i + duration[i]]

                if cur_income_may > max_val:
                    max_val = cur_income_may
                
                dp[i] = max_val

            # 날짜 지날 경우
            else:
                dp[i] = dp[i + 1]
            
        return max_val
 
    result = dynamic_programming()
    return result
 
 
N = 7
duration = [3, 5, 1, 1, 2, 4, 2]
cost = [10, 20, 10, 20, 15, 40, 200]
print(solution(N, duration, cost))
 
N = 10
duration = [5, 4, 3, 2, 1, 1, 2, 3, 4, 5]
cost = [50, 40, 30, 20, 10, 10, 20, 30, 40, 50]
print(solution(N, duration, cost))
