nums = [1, 0, -1, 0, -2, 2]
target = 0

def solution(nums, target):
    result = []
    for i in range(len(nums)):
        for j in range(i+1,len(nums)):
            for k in range(j+1,len(nums)):
                for l in range(k+1,len(nums)):
                    temp = sorted([nums[i],nums[j],nums[k],nums[l]])
                    if sum(temp) == target:
                        result.append(temp)

    return result

print(solution(nums, target))
