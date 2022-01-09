x = [-4, -4, -2, 0, 0, 2, 4, 5, 6, 3, 2, -4, -6]
y = [-1, -1, -1, -1, 0, 1, 20, 19, 17]

def solution(x):
    start = 0
    end = len(x) - 1

    while start <= end:
        mid = (start + end) // 2
        
        if x[mid] > x[mid-1]:
            if x[mid] > x[mid+1]:
                return x[mid]
            else:
                start = mid + 1
        else:
            end = mid - 1

print(solution(x))
print(solution(y))
