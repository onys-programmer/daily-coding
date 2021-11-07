T = int(input())
Ns = [int(input()) for _ in range(T)]

# 입력받는 N별로 snail배열 만들기
for i,N in enumerate(Ns): 
    arrs = [[0]*N for _ in range(N)]

    def circle(N, j, last):
        first = last + 1
        repeat = N - 1
        recur_cnt = j//2

        if N <= 1:
            if arrs[recur_cnt][recur_cnt] != 0:
                return
            else:
                arrs[recur_cnt][recur_cnt] = first
                return

        for i in range(repeat): # snail배열의 첫 행 구현
            arrs[recur_cnt][recur_cnt+i] = first + i
        for i in range(repeat): # snail배열의 마지막 열들 구현
            arrs[recur_cnt+i][-1-recur_cnt] = first + repeat + i
        for i in range(repeat): # snail배열의 마지막 행 구현
            arrs[-1-recur_cnt][-1-recur_cnt-i] = first + repeat*2 + i           
        for i in range(repeat): # snail 배열의 첫 열들 구현
            arrs[-1-i-recur_cnt][recur_cnt] = first + repeat*3 + i

        return circle(N-2, j+2, last + repeat*4)

    circle(N, 1, 0)

    print(f'#{i+1}')
    for arr in arrs:
        print(*arr)

print(type(print))
print(type(3))
print(type('2'))
print(type(circle))
print(type(type))